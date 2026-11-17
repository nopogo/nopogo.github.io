# BRAVR: Amsterdam pilot landing page

A static page for the BRAVR four-week pilot in Amsterdam (design "B · Deep Focus"). Visitors pick a slot, fill in a short checkout, and pay a €25 deposit through a Stripe Payment Link. Each booking is also written to a Google Sheet. The page is in English and Dutch and runs on GitHub Pages. There is no build step.

```
index.html               the pilot landing page (markup is in <template id="page-tpl">)
about.html, research.html, contact.html, privacy.html   the other pages (same set-up)
thanks.html              thank-you page after payment (shows the booking from this browser)
404.html                 page-not-found (GitHub Pages serves it for any missing address)
assets/js/config.js      ← settings: Google Sheet URL, Stripe link
assets/js/i18n.js        Dutch text (English on the left, Dutch on the right)
assets/js/page.js        page behaviour: booking grid, prices, checkout, animations
assets/js/booking.js     sends the booking to the Sheet, then on to Stripe
assets/js/dc-lite.js     small runtime that draws the template
assets/js/pages/         behaviour for the other pages (language toggle, FAQ, contact form)
assets/css/bravr.css     styles and self-hosted fonts
assets/css/pages.css     extra styles for the other pages
assets/fonts, img, video
apps-script/Code.gs      Google Apps Script that writes bookings to the Sheet
```

## Setup

### 1. Google Sheet
1. Open the Sheet, then **Extensions → Apps Script**. Replace the code with `apps-script/Code.gs` and save.
2. **Deploy → Manage deployments → Edit (pencil) → Version: New version → Deploy.** You must do this every time the script changes, or the old version keeps running.
3. The URL ending in `/exec` goes in `APPS_SCRIPT_URL` in `assets/js/config.js` (already set).

Bookings land on the `Signups` tab. Messages from the Contact page land on a `Contact` tab (created automatically). If that tab already exists with the old columns, new columns are added on the right automatically. For a clean layout, rename the old tab (e.g. `Signups-old`) and the script will create a fresh one.

### Booked slots (automatic)
The grid asks the Sheet which slots are taken and shows them as Full. One person per slot.
- Every row holds its slots, including `pending` rows where someone never finished paying.
- **To free a slot:** type `cancelled` or `refunded` in that row's `paid` column, or delete the row. The page picks it up within a minute.
- **To block a slot yourself** (holiday, trainer away): add a row with only `slotKeys` filled in, e.g. `2:Wed 18:15` (week 2, Wednesday 18:15). Separate several with commas.
- If two people send the same slot at the same moment, the second row gets `CLASH` in `paid` and does not hold the slot. Contact that person.
- `slotPlain` is the easy-to-read, sortable version (e.g. `Wed 18:15+19:00 weekly`).

### 2. Stripe
1. Product "Pilot deposit", one-time price **€25**.
2. Payment Link for that product:
   - turn on **Allow promotion codes**;
   - **After payment → redirect** to `https://nopogo.github.io/thanks.html` (the thank-you page shows the booking reference, sessions and amount due). `https://nopogo.github.io/?paid=1` also still works and shows the confirmation inside the pilot page;
   - enable **iDEAL** and cards under Settings → Payment methods.
3. Member and community codes: create a coupon, then promotion codes (e.g. `GYMNAME10`, `TEAM10`).
4. Put the link in `STRIPE_PAYMENT_LINK` in `config.js`. Test first with a test-mode link (`https://buy.stripe.com/test_...`) and card `4242 4242 4242 4242`.

What the page sends to Stripe: `prefilled_email`, `prefilled_promo_code` (the code typed at checkout), `client_reference_id` (the booking reference, same as `signupId` in the Sheet) and `locale`.

While `STRIPE_PAYMENT_LINK` is empty the page runs in **demo mode**: the booking still goes to the Sheet, then the on-page confirmation shows without payment.

The Sheet's `paid` column starts as `pending`. Mark it `yes` after checking the Stripe dashboard (search by Client reference ID).

### 3. Text
- English text is in `index.html` (inside the template) and `assets/js/page.js` (booking grid labels).
- Dutch is in `assets/js/i18n.js`, for every page. Find the English line, change the Dutch next to it. Keep `{{holes}}` as they are. Any English line without a Dutch partner simply shows in English, so when you change English text, add or update its Dutch line too.
- If the same English needs two different Dutch versions, give its element `data-i18n="some-name"` and add `"#some-name": "…"` to the Dutch list.
- Prices (€100 Single, €200 Double) and the seven sample "Full" slots from the design are in `assets/js/page.js` (search `const price` and `baseFull`).

### Useful links
- Dutch: `https://nopogo.github.io/?lang=nl` (the NL/EN button remembers the choice)
- Member code filled in: `https://nopogo.github.io/?code=GYMNAME10#checkout`
- Community code filled in: `https://nopogo.github.io/?ccode=TEAM10#checkout`
- UTM parameters (`?utm_source=instagram&utm_campaign=pilot`) are saved with each booking.

## Run locally
```bash
python -m http.server 8000
```
Then open http://localhost:8000. Note that bookings made locally do reach the real Sheet if `APPS_SCRIPT_URL` is set.
