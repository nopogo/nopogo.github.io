# BRAVR: consumer landing page

This is a static landing page for the BRAVR VR stress resilience course in Amsterdam. It collects signups into a Google Sheet. Visitors can also pay a deposit through a Stripe Payment Link, which accepts discount codes. The page is in Dutch and English and is hosted on GitHub Pages.

```
index.html            landing page
thanks.html           Stripe success page
assets/js/config.js   ← all settings live here
assets/js/i18n.js     NL/EN copy (edit text here)
assets/js/signup.js   form validation, save, redirect to Stripe
assets/css/style.css
apps-script/Code.gs   Google Apps Script that writes signups to a Sheet
```

## Setup

### 1. Google Sheet (stores signups)
1. Create a new Google Sheet, for example "BRAVR signups".
2. Open **Extensions → Apps Script**, paste in the contents of `apps-script/Code.gs`, and save.
3. Go to **Deploy → New deployment → Web app**. Set *Execute as: Me* and *Who has access: Anyone*, then deploy and authorise.
4. Copy the URL that ends in `/exec` into `APPS_SCRIPT_URL` in `assets/js/config.js`.

The script creates a `Signups` tab. Each submission becomes one row with a `signupId`. If you change the script later, you must deploy a new version (**Manage deployments → Edit → New version**).

While `APPS_SCRIPT_URL` is empty, the form runs in demo mode: submissions are only logged to the browser console.

### 2. Stripe (deposit + discount codes)
1. Go to **Products → Add product** and create "Course deposit" with a one-time price, for example €50.
2. Go to **Payment Links → New** and select that product. Then:
   - Turn on **Allow promotion codes**.
   - Under **After payment**, choose *Don't show confirmation page → redirect* to `https://nopogo.github.io/thanks.html`, or to your own domain.
   - Under **Payment methods** (Settings → Payment methods), enable **iDEAL** and cards.
3. Create discount codes under **Products → Coupons**: first a coupon, then a promotion code such as `EARLYBIRD`.
4. Copy the payment link into `STRIPE_PAYMENT_LINK` in `config.js`. For testing, use a **test mode** link (`https://buy.stripe.com/test_...`) and card number `4242 4242 4242 4242`.

When someone pays, the page sends these values to Stripe:
- `prefilled_email`
- `client_reference_id`: the same value as `signupId` in the Sheet, so you can match each payment to its signup.
- `prefilled_promo_code`: the code the visitor typed. Stripe checks that it is valid.
- `locale`: `nl` or `en`.

The Sheet's `paid` column starts as `pending`. Mark it `yes` yourself after checking the Stripe dashboard, which shows the Client reference ID on every payment.

### 3. Content
- **Prices, dates and location:** `assets/js/config.js`.
- **All other text, in both languages:** `assets/js/i18n.js`. Check the refund wording (`pricing.depositNote` and `faq.a4`) against your actual policy.

### Useful links
- **Dutch first:** `https://nopogo.github.io/?lang=nl`
- **Discount code already filled in:** `https://nopogo.github.io/?code=EARLYBIRD#signup`
- **Campaign tracking:** UTM parameters (`?utm_source=instagram&utm_campaign=launch`) are saved with each signup.

## Run locally
```bash
python -m http.server 8000
```
Then open http://localhost:8000.
