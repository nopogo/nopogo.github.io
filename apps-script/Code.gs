/**
 * BRAVR pilot booking → Google Sheet
 *
 * Setup:
 *  1. Create a Google Sheet. Extensions → Apps Script. Replace Code.gs with this file.
 *  2. Deploy → New deployment → type "Web app"
 *       Execute as: Me
 *       Who has access: Anyone
 *  3. Copy the web app URL (ends in /exec) into assets/js/config.js → APPS_SCRIPT_URL.
 *  4. After editing this script, deploy a NEW VERSION (Manage deployments → edit → Version: New),
 *     otherwise the old code keeps running.
 */

const SHEET_NAME = 'Signups';

// A row holds its slots unless its "paid" cell says one of these (any capitals).
// To free a slot: type cancelled (or refunded) in the paid column, or delete the row.
const FREE_STATUSES = ['cancelled', 'canceled', 'refunded', 'no', 'clash'];

// Column order in the sheet. New keys sent by the form are appended automatically.
const COLUMNS = [
  'submittedAt', 'signupId', 'intent', 'paid',
  'name', 'email', 'phone', 'train',
  'slotPlain', 'length', 'pattern', 'slots', 'firstSession', 'startWeek', 'slotKeys',
  'price', 'deposit', 'dueAtFirstSession', 'payMethod',
  'codeType', 'discountCode', 'memberCode', 'communityCode',
  'health', 'meds', 'consent',
  'lang', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
  'referrer', 'page'
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.website) return json({ ok: true }); // honeypot

    const sheet = getSheet_();
    let headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    // Add any unknown keys as new columns
    Object.keys(data).forEach(k => {
      if (headers.indexOf(k) === -1) {
        headers.push(k);
        sheet.getRange(1, headers.length).setValue(k);
      }
    });

    // If two people send the same slot at nearly the same moment, the second row is marked CLASH.
    const already = takenSlots_(sheet);
    const clash = keysOf_(data.slotKeys).some(k => already.indexOf(k) !== -1);

    const row = headers.map(h => {
      if (h === 'paid') return clash ? 'CLASH' : (data.intent === 'deposit' ? 'pending' : '');
      const v = data[h];
      return v == null ? '' : String(v).slice(0, 2000);
    });
    sheet.appendRow(row);

    // Optional: uncomment to get an email for every signup.
    // MailApp.sendEmail(Session.getEffectiveUser().getEmail(),
    //   'New BRAVR booking: ' + data.name + ' (' + data.slots + ')',
    //   JSON.stringify(data, null, 2));
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// The page asks this for the list of booked slots, so the grid can show them as Full.
// Only slot codes are returned (e.g. "1:Wed 18:15" = week 1, Wednesday 18:15). No names or emails.
function doGet() {
  return json({ ok: true, service: 'bravr-signups', taken: takenSlots_(getSheet_()) });
}

function keysOf_(v) {
  return String(v == null ? '' : v).split(',').map(s => s.trim()).filter(s => s);
}

function takenSlots_(sheet) {
  const last = sheet.getLastRow();
  if (last < 2) return [];
  const values = sheet.getRange(1, 1, last, sheet.getLastColumn()).getValues();
  const headers = values[0];
  const kCol = headers.indexOf('slotKeys'), pCol = headers.indexOf('paid');
  if (kCol === -1) return [];
  const out = {};
  for (let r = 1; r < values.length; r++) {
    const status = pCol === -1 ? '' : String(values[r][pCol]).trim().toLowerCase();
    if (FREE_STATUSES.indexOf(status) !== -1) continue;
    keysOf_(values[r][kCol]).forEach(k => { out[k] = true; });
  }
  return Object.keys(out);
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.getRange(1, 1, 1, COLUMNS.length).setValues([COLUMNS]).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
