/**
 * BRAVR signup → Google Sheet
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

// Column order in the sheet. New keys sent by the form are appended automatically.
const COLUMNS = [
  'submittedAt', 'signupId', 'intent', 'paid',
  'firstName', 'lastName', 'email', 'phone', 'ageRange', 'postcode',
  'occupation', 'occupationOther', 'stressSources', 'vrExperience', 'goal',
  'schedule', 'earliestStart', 'source', 'discountCode',
  'consentPrivacy', 'consentHealth', 'consentNews',
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

    const row = headers.map(h => {
      if (h === 'paid') return data.intent === 'deposit' ? 'pending' : '';
      const v = data[h];
      return v == null ? '' : String(v).slice(0, 2000);
    });
    sheet.appendRow(row);

    // Optional: uncomment to get an email for every signup.
    // MailApp.sendEmail(Session.getEffectiveUser().getEmail(),
    //   'New BRAVR signup: ' + data.firstName + ' ' + data.lastName + ' (' + data.intent + ')',
    //   JSON.stringify(data, null, 2));
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json({ ok: true, service: 'bravr-signups' });
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
