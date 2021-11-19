//listen for the service worker to be installed
self.addEventListener("install", function (event) {
  // Perform install steps
  console.log("Service worker installed");
});
//listen for the service worker to be activated
self.addEventListener("activate", function (event) {
  // Perform install steps
  console.log("Service worker activated");
});
//listen for a fetch event on the service worker
self.addEventListener("fetch", function (event) {
  // Perform install steps
  console.log("Service worker fetched");
});
