var cacheName = "sisi-sport";
var filesToCache = [
  "/",
  "/index.html",
  "/account-history.html",
  "/bet-history.html",
  "/change-password.html",
  "/login-history.html",
  "/logined.html",
  "/other-settings.html",
  "/payment.html",
  "/personal-details.html",
  "/css/style.css",
  "/css/bootstrap-datepicker3.min.css",
  "/css/bootstrap.min.css",
  "js/bootstrap-datepicker.min.js",
  "js/bootstrap.min.js",
  "js/jquery.min.js",
];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
