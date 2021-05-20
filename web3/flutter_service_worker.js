'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f9c9d2513ca47c9d039a8e2392dd7ddd",
"assets/assets/fonts/muli/Muli-Bold.ttf": "1e36ee6d50c037b1bb4bdd3effa7a28e",
"assets/assets/fonts/muli/Muli-Light.ttf": "6b667c3dbc3d4df6dd096ad18296704d",
"assets/assets/fonts/muli/Muli.ttf": "df7330254513d2fa2f4c1e9ee98cc6c6",
"assets/assets/icons/arrow_right.svg": "7d2e92d8f069ee2c73f1820beea62dfd",
"assets/assets/icons/Back%2520ICon.svg": "a1540761ddc4d5ebd1ebf7e732a7af0a",
"assets/assets/icons/Bell.svg": "03c0fc05f0c26d3107496511ef140dd2",
"assets/assets/icons/Bill%2520Icon.svg": "c14fba2dc1da1beac210bc96c90568a6",
"assets/assets/icons/Call.svg": "52af54660badff2b15a84fd34203c7ee",
"assets/assets/icons/Camera%2520Icon.svg": "25207a856bce06a7c1f4d695638a0383",
"assets/assets/icons/Cart%2520Icon.svg": "220f5aa89905b1351c4fdf71aee29f11",
"assets/assets/icons/Cash.svg": "9a1bfa4f03729b332bb98439f713637e",
"assets/assets/icons/Chat%2520bubble%2520Icon.svg": "3e6e1ab6925d3db86ce9bd109c121db0",
"assets/assets/icons/Check%2520mark%2520rounde.svg": "e83caa6ca41e8af9229ae29d79f9410b",
"assets/assets/icons/Close.svg": "70478a15e0479750b0b03e000041e9f3",
"assets/assets/icons/Conversation.svg": "291fb6c6acdeb807afb452ae90f930db",
"assets/assets/icons/Discover.svg": "0981b6e74080b318d0bb4255681d2e05",
"assets/assets/icons/Error.svg": "0f876e9b9170982e37bbf767c6ebb47f",
"assets/assets/icons/facebook-2.svg": "48bf15d2057966765f384827997a2f41",
"assets/assets/icons/Flash%2520Icon.svg": "8b2bc2fd2894d143940eb565b4a827fe",
"assets/assets/icons/Game%2520Icon.svg": "f913dbd8d0e9e437cfb53d774eb980d9",
"assets/assets/icons/Gift%2520Icon.svg": "6feeb93f33263146741e38f4ebfbccbc",
"assets/assets/icons/google-icon.svg": "38e282dafbaaf9823263d49349670447",
"assets/assets/icons/Heart%2520Icon.svg": "a2be4f5f2079f5ff3dbd117eeaa9471e",
"assets/assets/icons/Heart%2520Icon_2.svg": "f728c6b3d75dfab6450f56a2a57633f0",
"assets/assets/icons/Location%2520point.svg": "146ea387710fa420046c0f71b89ad474",
"assets/assets/icons/Lock.svg": "44a5fb6d11a48fd52c87d95e34e7a689",
"assets/assets/icons/Log%2520out.svg": "ef8dc3d612e3e63ae4728a24d9982f13",
"assets/assets/icons/Mail.svg": "6b876f2539a1946b1a946e7a5646e909",
"assets/assets/icons/Parcel.svg": "45a2e4513281a1c511cff0d7d86439d1",
"assets/assets/icons/Phone.svg": "589731a88a098c9c6d40e32bc11c3d83",
"assets/assets/icons/Plus%2520Icon.svg": "23bd873f0fdef239500d68a150f9fa93",
"assets/assets/icons/Question%2520mark.svg": "7d0f74b3eb3cbeac772cb6a41476cfcf",
"assets/assets/icons/receipt.svg": "e0ecaf4c17597903fa1e8ab3c28fa963",
"assets/assets/icons/remove.svg": "77f17bcf86cb62db1b3ce224d6cb6fd3",
"assets/assets/icons/Search%2520Icon.svg": "5383aff67a0cc61bc20b953c73d87469",
"assets/assets/icons/Settings.svg": "d8fd4b8ed70a516c17d3d981d9a49999",
"assets/assets/icons/Shop%2520Icon.svg": "1eda40840728635d3279f313774d1675",
"assets/assets/icons/Star%2520Icon.svg": "1ef6ad3bbe15947a5b4d9bf153101fd3",
"assets/assets/icons/Success.svg": "b0a226cdd68878cf33bddc8d9d2cc1f6",
"assets/assets/icons/Trash.svg": "f877c275194b39ca5f21fe7202ca852a",
"assets/assets/icons/twitter.svg": "2186bb91925602b76e5a4384b2198c06",
"assets/assets/icons/User%2520Icon.svg": "950d2f1652bdb59675231707a9124535",
"assets/assets/icons/User.svg": "737d49c1953f8098f618d523b45e5657",
"assets/assets/images/apple-pay.png": "8ed30196e39ee689aa2cc5b604da80ee",
"assets/assets/images/fedex-express.png": "5c65ce272dc58c3dd0b416f0549f23e4",
"assets/assets/images/glap.png": "562f67ce5b89f0fd52b82756866f5c6f",
"assets/assets/images/google-pay.png": "515fdb5d6b0c72ab7ff1d020715da990",
"assets/assets/images/Image%2520Banner%25202.png": "1d233e6648a139a8b30d63489e852fc8",
"assets/assets/images/Image%2520Banner%25203.png": "ac22df8189dc403ff2e113489fb114b4",
"assets/assets/images/Image%2520Popular%2520Product%25201.png": "af5c7d2b62467e5340990c2c18d04841",
"assets/assets/images/Image%2520Popular%2520Product%25202.png": "0daef779816bf4febf8967c5b8c9ddb3",
"assets/assets/images/Image%2520Popular%2520Product%25203.png": "fcbdff37daf1bf2aca91b6bc9323c4ca",
"assets/assets/images/mastercard-2.png": "03c20b63d4ffa13484f48fac9d2e32b2",
"assets/assets/images/Pattern%2520Success.png": "c46441a1f4f1d8913d779178aebc9bfd",
"assets/assets/images/paypal.png": "fdd28064849926e343b82d25e9df0a03",
"assets/assets/images/product%25201%2520image.png": "d22ed624beffb93913bb3436bd8f9e6a",
"assets/assets/images/Profile%2520Image.png": "07a16c1fa377ead829efef7e95ffa5c4",
"assets/assets/images/ps4_console_blue_1.png": "0085bd0d4680ea7e99d92fbd1a2d67df",
"assets/assets/images/ps4_console_blue_2.png": "f321803db42a1852afeebcc740edae90",
"assets/assets/images/ps4_console_blue_3.png": "69c388ccfc8f00f0815de3696f0dae25",
"assets/assets/images/ps4_console_blue_4.png": "b9d0ed66e7040ef25f41501c143734b5",
"assets/assets/images/ps4_console_white_1.png": "070751496c7e7e8a3beee49c52fc4eba",
"assets/assets/images/ps4_console_white_2.png": "fdc127c9033115e9ff73d9abcec601c1",
"assets/assets/images/ps4_console_white_3.png": "08c0901faebb16d9547fea1d651a795d",
"assets/assets/images/ps4_console_white_4.png": "c06cfaab26ed218bdf3eadab54a97067",
"assets/assets/images/shoes2.png": "e746c8992abd29da966cf91f8da87290",
"assets/assets/images/splash_1.png": "51c064d3f19cf39aee627a3aed744193",
"assets/assets/images/splash_2.png": "3580b1c0bb9f244b51d8042b8e762bf5",
"assets/assets/images/splash_3.png": "54b2889511d311463cf331284d9197bb",
"assets/assets/images/success.png": "f80df756b315fbb72670a78e82095c3c",
"assets/assets/images/tshirt.png": "eaa8d7a86210783a28569afcd67632c6",
"assets/assets/images/visa.png": "e5102f3cf10261b0cf2ddb4c27e66f14",
"assets/assets/images/wireless%2520headset.png": "dd4c3f943adb93a516441e8068058b2c",
"assets/FontManifest.json": "2b150d200b71c4a389a23996af4359ad",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b7938beb8e3ce0449aff2d4fb5cd2316",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2ff7280e28a0e01f4d12ec31275e143a",
"/": "2ff7280e28a0e01f4d12ec31275e143a",
"main.dart.js": "f91920b6329a5c8f1189614f9603c5a5",
"manifest.json": "eb0967c213ff3e1cc1170c85fc8b5515",
"version.json": "525a858fce84cf48acd737f015f076ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
