// ============================================================
//  SITE CONFIG — edit these values; no other file needs changing
// ============================================================
window.BRAVR_CONFIG = {
  // Google Apps Script web-app URL (see README, step 1).
  // Leave empty to run in "demo mode" (submissions are logged to the console only).
  APPS_SCRIPT_URL: "",

  // Stripe Payment Link for the deposit (see README, step 2).
  // Use a test-mode link (https://buy.stripe.com/test_...) while testing.
  STRIPE_PAYMENT_LINK: "",

  // Display values only — the real amount charged is set in Stripe.
  DEPOSIT_AMOUNT: "€50",
  COURSE_PRICE: "€395",

  // Shown on the page in both languages.
  START_DATES: { en: "Spring 2027", nl: "Voorjaar 2027" },
  LOCATION: { en: "Central Amsterdam (exact venue TBA)", nl: "Amsterdam-Centrum (locatie volgt)" }
};
