// ============================================================
//  SITE CONFIG — edit these values; no other file needs changing
// ============================================================
window.BRAVR_CONFIG = {
  // Google Apps Script web-app URL (see README, step 1).
  // Leave empty to run in "demo mode" (submissions are logged to the console only).
  APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbyk948VEH6PJ44OPuQcWyptJBwD7NM_mXJG8-2pcJF_DzU-mrTa9FQo2A0r5zd7p3XAfA/exec",

  // Stripe Payment Link for the deposit (see README, step 2).
  // Use a test-mode link (https://buy.stripe.com/test_...) while testing.
  // Leave empty for demo mode: bookings still go to the sheet, then the on-page confirmation shows.
  // In Stripe, set "After payment" to redirect to https://nopogo.github.io/?paid=1
  STRIPE_PAYMENT_LINK: "",

  // For reference only. The page itself shows €25 deposit, €100 Single, €200 Double
  // (set in assets/js/page.js). The amount actually charged is set in Stripe.
  DEPOSIT_AMOUNT: "€25"
};
