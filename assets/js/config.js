// ============================================================
//  SITE CONFIG — edit these values; no other file needs changing
// ============================================================
window.BRAVR_CONFIG = {
  // Google Apps Script web-app URL (see README, step 1).
  // Leave empty to run in "demo mode" (submissions are logged to the console only).
  APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbxA7ytyuBpNJNTDrDvuRti6LWXZnHUmXfrGMSEBCfR6AichJpVNcCMn6CzR8jqZOZj8Kg/exec",

  // Stripe Payment Link for the deposit (see README, step 2).
  // Use a test-mode link (https://buy.stripe.com/test_...) while testing.
  STRIPE_PAYMENT_LINK: "https://buy.stripe.com/test_4gM7sM6G75Bxc2b6YW2Ji00",

  // Display values only — the real amount charged is set in Stripe.
  DEPOSIT_AMOUNT: "€25",
  COURSE_PRICE: "€200",

  // Shown on the page in both languages.
  START_DATES: { en: "Spring 2027", nl: "Voorjaar 2027" },
  LOCATION: { en: "Central Amsterdam (exact venue TBA)", nl: "Amsterdam-Centrum (locatie volgt)" }
};