'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7cfbc2c84276984b838180c68c1877f3",
"assets/assets/fonts/Helvetica/Helvetica-Bold.ttf": "d13db1fed3945c3b8c3293bfcfadb32f",
"assets/assets/fonts/Helvetica/Helvetica.ttf": "1b580d980532792578c54897ca387e2c",
"assets/assets/icons/add.png": "9b20769e6fdbb38b6d776b3074ec8de5",
"assets/assets/icons/app_logo.png": "08de45222ee26e3afe0327b8d4532f25",
"assets/assets/icons/bank-account.png": "d48a860eb1ff56ec274108abddfaf47e",
"assets/assets/icons/business-hours.png": "33f4094065a391f12499e00814e82434",
"assets/assets/icons/circle-check.png": "fba94b47216e508174e995941f1210ca",
"assets/assets/icons/close.png": "6fb374412a957159df96a8f7057c6896",
"assets/assets/icons/close_restaurant.png": "9f7f965c23cd530bf590f5b8edf61f90",
"assets/assets/icons/customer_feedback.png": "b0efd3cbfa9e766778eb3b86863bcfc5",
"assets/assets/icons/date_range.png": "4de8bbaf20f81158865da3c07d5489c5",
"assets/assets/icons/drop_down.png": "32462ab7e3081cd62166e478381214a1",
"assets/assets/icons/drop_menu.png": "f35bbc5046a47fa39d23a2000fd2eda7",
"assets/assets/icons/edit.png": "6242b386ea2415d68f5b8444968269e7",
"assets/assets/icons/email.png": "2173505d438ce7d38e4eb51bf5870db2",
"assets/assets/icons/eye-slash.png": "c3139fe0302c834accd0d1bb3c5fdaa2",
"assets/assets/icons/eye.png": "3b96519f2cf77e43c492ac25d878cfcc",
"assets/assets/icons/financials.png": "8f28171405fc3d2dfdba9ce6d672dbce",
"assets/assets/icons/food-menu.png": "5167aa258a7520d2b0e59f93abfef831",
"assets/assets/icons/foodhost_logo.png": "ca6dce6de22e485ce5c21ed82d7cf720",
"assets/assets/icons/foodhost_logo_2.png": "dfefe60badb5421f9e8546862065f0ee",
"assets/assets/icons/help.png": "a92ee8c1100e301565d4cd00686f5b1b",
"assets/assets/icons/home-page.png": "925ddcbdb7ba1e43a479f7149a66a8fc",
"assets/assets/icons/home.png": "ff546f3de9c83d881021f5513e7819bd",
"assets/assets/icons/image-add.png": "b92cd25337c2c4b3fcd7dbc5b2b12a8a",
"assets/assets/icons/left.png": "14193fcda1064ca2cb35e8c8546c936f",
"assets/assets/icons/manage-employees.png": "db5883cb10466818f8a08c15190a389a",
"assets/assets/icons/net_income.png": "d3c78539007e013d115fa689a508846d",
"assets/assets/icons/net_sale.png": "5784a91f381ed460721efe052496a132",
"assets/assets/icons/notification.png": "9f7ba40554d5f405d5d64743ac3cb1b6",
"assets/assets/icons/open_restaurant.png": "3a42cac0d7abd52e9de57799d399fac8",
"assets/assets/icons/options.png": "13fbc2c15bf5921e7b859495459035a7",
"assets/assets/icons/password.png": "39aab91676ae5ea01a5715b4ba0a5dee",
"assets/assets/icons/promotions.png": "2afb214906965c267a268380434df178",
"assets/assets/icons/restaurant-page.png": "5b1b8416a2fec2935dcb970cd5854637",
"assets/assets/icons/right.png": "baa70b7d97ae8b64038421e43766cb4e",
"assets/assets/icons/search-page.png": "326f877348160aa3743a279db8554bbd",
"assets/assets/icons/search.png": "8be4ac3e9fb8a016f4cb970f70096f79",
"assets/assets/icons/store.png": "c78a250ad2eaa476d50639c14e8a2a05",
"assets/assets/icons/total_cost.png": "6e14fa6e3186a24711bf5b30096b7665",
"assets/assets/icons/total_sale.png": "50a8e00b898a6d177743b7a13543924e",
"assets/assets/icons/un-check.png": "87f42978e3e37c3e40a695aa72200bdc",
"assets/assets/img/awaiting_verification.png": "14e9c6daefdf2cc34563e322bef2ac8a",
"assets/assets/img/check_email.png": "15d76efbfda473fd64a805ba9edd1c34",
"assets/assets/img/help_bg.png": "49455ff442770a6573e69c4211724be0",
"assets/assets/img/logo_line.png": "b8e7ef6a54e418e81ef87c8e4d07bfdd",
"assets/assets/img/signup_bg.png": "538749cbcd8f3d2bc8f2e0b81369af9d",
"assets/assets/img/success_done.gif": "9327cdc7c070ebbf2cc174d65145a7db",
"assets/assets/img_temp/blank_profile.png": "77f5794e2eb49f7989b8f85e92cfa4e0",
"assets/assets/img_temp/restaurant_cover.png": "30f58bf2f0f8994b8796fcdfacdb31bb",
"assets/assets/img_temp/user_profile.png": "e85c8d1500695a5ad3982ab021212a9d",
"assets/FontManifest.json": "54afbcab98db44a33444763fb4f9c5d9",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "cc26c0f289798384fe05024dd6b2a9ab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b5185ba3e6e4b6b7510f40a1bf1402e2",
"/": "b5185ba3e6e4b6b7510f40a1bf1402e2",
"main.dart.js": "8027cd4e3876b083042fa039e9a4da31",
"manifest.json": "f69eaf2720b771a2df07842e20795d2a",
"version.json": "f0c0ce745bb6d20dc456a77994d94341"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
