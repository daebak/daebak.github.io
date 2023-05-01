'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "414b6830c4d0ddcd5be19254714c51ad",
"assets/assets/font/MyFlutterApp.ttf": "07aa9d324fd2c8c89b0a7bde35944846",
"assets/assets/font/Pretendard-Black.ttf": "eb51bbd6cd9010dc92357f8303784b17",
"assets/assets/font/Pretendard-Bold.ttf": "dc5a0e145559879abb18d5969da0df6b",
"assets/assets/font/Pretendard-ExtraBold.ttf": "a75966342357de44f5a09d07b0ae535a",
"assets/assets/font/Pretendard-Light.ttf": "3a2c8b53f02202d322fa86eb9672ba30",
"assets/assets/font/Pretendard-Medium.ttf": "be5dedc52c0403d321e8202ae6aac2b3",
"assets/assets/font/Pretendard-Regular.ttf": "65e9a69de2d10a9e43102d5c5eae368b",
"assets/assets/font/Pretendard-SemiBold.ttf": "bc96c6e0e53f8f953912e93a1e50b8f7",
"assets/assets/font/Pretendard-Thin.ttf": "86fdcc882292e5db7d6bef1c68aceba6",
"assets/assets/icons/address.svg": "565106c69b958107fa05cb819e655dbe",
"assets/assets/icons/alarm.svg": "74a9077f3b281c5e65cd6af07dfe9556",
"assets/assets/icons/alarm_active.svg": "5226f203ed6d6c4917d45287b7b3e710",
"assets/assets/icons/alarm_disable.svg": "5d2b0dd0ee6c5155e815cc1783b03e57",
"assets/assets/icons/alert.png": "d93cad7b86e55f420298ade89091f391",
"assets/assets/icons/alert.svg": "a0c150b1d8140b2db3f4eb59b5e8d118",
"assets/assets/icons/appbar_back.svg": "50d5dcb8810a90d31f8ae004211b3ca9",
"assets/assets/icons/appbar_close.svg": "a4fad0e68936b5c41432318a2e3df9da",
"assets/assets/icons/apple.svg": "7d5ee3da144912de21b8234649b0799c",
"assets/assets/icons/athletic_badminton.svg": "8d378664b7f551b1d301bee39ae94dc7",
"assets/assets/icons/athletic_basketball.svg": "5470e85edb4c49a5cb9a179bbee97875",
"assets/assets/icons/athletic_billiards.svg": "e25e68791775ce728fbe4ecaffcab2a6",
"assets/assets/icons/athletic_football.svg": "a990b7fe3c1af2ec0d27613b83be8f97",
"assets/assets/icons/athletic_golf.svg": "ea39cee66447627a2b22c95457ee3eaa",
"assets/assets/icons/athletic_pingpong.svg": "f87b86a2ec75ec2e4372286c0b086d3c",
"assets/assets/icons/athletic_soccer.svg": "4b2c7d7c9429e13ec99349c877cea15a",
"assets/assets/icons/athletic_tennis.svg": "b98407d3a0d234db4300c2811d7e8ecf",
"assets/assets/icons/back_arrow.svg": "fc624aeb0a5a0709e429bf5456d191af",
"assets/assets/icons/bg.svg": "2d5d7ca8881356da54bf5fc6396e4d1f",
"assets/assets/icons/bottomnavigation_athletic.svg": "02f38ee8c6d5b759aa07e7e00f557a3a",
"assets/assets/icons/bottomnavigation_competition.svg": "400398629fcbd999fd847e65ae1c2b03",
"assets/assets/icons/bottomnavigation_friend.svg": "37e5d0546da45e4347976f0e60dbf055",
"assets/assets/icons/bottomnavigation_group.svg": "071f06f5487b273355b86a93eb5f9a9d",
"assets/assets/icons/bottomnavigation_myinfo.svg": "3f0ac2d01b460605e4a8a4fd287498cb",
"assets/assets/icons/calender.svg": "3bb75830f118f2cb19bc49902e050734",
"assets/assets/icons/Call.svg": "a14629eb7b9c08720738adbf39fdd57c",
"assets/assets/icons/Call_box.svg": "053c17f688c321ddb71d8ad59f3cf341",
"assets/assets/icons/camera.svg": "09843a0e499ba24b693f0de946e57c9b",
"assets/assets/icons/Cardiologist.svg": "c30dd7760d1657d92579acaad9df256b",
"assets/assets/icons/Chat.svg": "4ad35d33db2051d59f24d99eadb4f313",
"assets/assets/icons/Chat_box.svg": "3bea812077455fff1304113732ca06dd",
"assets/assets/icons/check_active.svg": "6bc096e7b3976f38cfde42a433fcdeac",
"assets/assets/icons/check_disable.svg": "4d8f873925f717f19db06daaa7651a35",
"assets/assets/icons/Clock.svg": "af23b6674d3b48800849cd8313e74aa2",
"assets/assets/icons/close_with_circle.svg": "351f2699333cdd6395251e044ae7704a",
"assets/assets/icons/dropdown_arrow.svg": "e3c4960f79611080bc967453cefdb38b",
"assets/assets/icons/dropup_arrow.svg": "a1bc53ee403074ed9b1d9cef272a0501",
"assets/assets/icons/edit.svg": "cfd8380ece934e44589a194022f857bf",
"assets/assets/icons/Error.svg": "0f876e9b9170982e37bbf767c6ebb47f",
"assets/assets/icons/event.svg": "6602e6c112bdb7959c6e0bea188827f5",
"assets/assets/icons/exit.svg": "086166542bd82611c00ba5a654740dbd",
"assets/assets/icons/eye.svg": "8211980f69253d8b87a1b4162aeb744a",
"assets/assets/icons/eye_disable.svg": "edf63c38e62c690361b91eefde9fd0da",
"assets/assets/icons/facebook-2.svg": "48bf15d2057966765f384827997a2f41",
"assets/assets/icons/facebook.svg": "d4c84effc0bf230d150bfb05d02ff1e7",
"assets/assets/icons/gerda_logo.svg": "c507c4d37592b4aa5df07ce32bf5b1b3",
"assets/assets/icons/google-icon.svg": "38e282dafbaaf9823263d49349670447",
"assets/assets/icons/google.svg": "6c2213ae8a4e8fb45bec09324b8e68d0",
"assets/assets/icons/home.svg": "c514b808ee3eab7f251568234fd4cc8f",
"assets/assets/icons/kakao.svg": "38e785398ec03ae6bb50e3342c3b7eb7",
"assets/assets/icons/location_pin.svg": "e3764cb0fc44ed67739037d393e15578",
"assets/assets/icons/Lock.svg": "44a5fb6d11a48fd52c87d95e34e7a689",
"assets/assets/icons/logo.svg": "d0eb20e39a15c28fb8ad669f1b71e6c8",
"assets/assets/icons/logo_korean.svg": "4d495e1f191422f8dd21fe23108e4f9c",
"assets/assets/icons/logo_main_page.svg": "fb920a92d5e4fa4e5362a8c276ebbbd0",
"assets/assets/icons/mail.svg": "79c6eac0a60d22958573a652750a41fe",
"assets/assets/icons/mailblue.svg": "f8df8c70e405b412f68ed6de65194f6b",
"assets/assets/icons/Menu.svg": "1af589376561906c7ea8d3a35f9e2908",
"assets/assets/icons/mini_right_arrow.svg": "9de249df1346429fce4eeb2145d00b2b",
"assets/assets/icons/naver.svg": "e954415ffac228e03d63e91357b0cb44",
"assets/assets/icons/Neurosurgeon.svg": "7607437f06cd6b1a8c7a8ac52529db20",
"assets/assets/icons/notifications.svg": "eee27d9936603109affca4f7494dfb22",
"assets/assets/icons/Notificatio_box.svg": "ffbe7212b0de5223e47ade47cf62b570",
"assets/assets/icons/onboarding_group_people.svg": "b820eebd05d433dab4298f52f4804bbb",
"assets/assets/icons/onboarding_soccer_man.svg": "fa3d01c42f59809ccefa9e290378b52a",
"assets/assets/icons/onboarding_sport_list.svg": "13477d655cf7307624005c288092dcbe",
"assets/assets/icons/onboarding_stand_girl.svg": "4433edbaa497a3c30d783ab47da0a550",
"assets/assets/icons/onboarding_step1.svg": "87691fa48f677256bdb54abc4b9c2be9",
"assets/assets/icons/onboarding_step1_rectangle.svg": "ccd3e18e74eac660e228c17265a4c9b9",
"assets/assets/icons/onboarding_step2_rectangle.svg": "1f609c84f13683bc99e6c2d2ef0dcff0",
"assets/assets/icons/onboarding_step3_rectangle.svg": "ca506fa1676575ab94f9eb5d203a125a",
"assets/assets/icons/Pediatrician.svg": "ffe0d551122ef57966716153a3a80dc2",
"assets/assets/icons/Psychiatrist.svg": "c6f0a3beea445a752b0a2acd0c65140b",
"assets/assets/icons/purple_plus.svg": "449ad775513fa8c609a0b6ea623ba8e7",
"assets/assets/icons/red_minus.svg": "8aebed0d93b18fe8d226b21ac9645d04",
"assets/assets/icons/right_arrow.svg": "940ee3e24cfd29b611d6701961e50c0d",
"assets/assets/icons/right_arrow_24.svg": "7250d55ea0a5f01554cf81e410204b17",
"assets/assets/icons/search.svg": "9a1b86655238ea30020fc1b64fef8556",
"assets/assets/icons/Serach.svg": "0057473f7919a5b209c66dc1e4710be5",
"assets/assets/icons/splash_bg.svg": "bbe178f2f55024e0abf1ae6f41f73932",
"assets/assets/icons/star.svg": "ff5a3d6a8bec997ee5a57a90ed59069e",
"assets/assets/icons/star_disable.svg": "7412595a2c10067a89af9d79f65b9297",
"assets/assets/icons/stethoscope.svg": "96364f38d0152a447f04e2c53f66fccc",
"assets/assets/icons/Success.svg": "b0a226cdd68878cf33bddc8d9d2cc1f6",
"assets/assets/icons/supports_logo.svg": "f3a497f9e3cd385f004f009d9dc84990",
"assets/assets/icons/Video.svg": "16f5923bc6ff80a0264d5acb8a9104be",
"assets/assets/icons/Video_box.svg": "fbd8799fc430c5a15e02c7b495d682ab",
"assets/assets/icons/video_play.svg": "35d176ec294838c663fa5e0b089250cf",
"assets/assets/images/Asma_Khan.png": "604bb0886bb771b2149fe7e6e89675d3",
"assets/assets/images/black.png": "266382b758d555e1f6a06f355bfda61e",
"assets/assets/images/black_1.png": "64a860382016a8fc31fc2274aa2a2e3d",
"assets/assets/images/congratulations.gif": "018f86062f937b17b3813796bd6366d7",
"assets/assets/images/doctor_big_preview.png": "8dae046f2a2e8d41d16e9a8fb13fc1b1",
"assets/assets/images/Dr.%2520Kiran%2520Shakia.png": "c2c1b50bae6f5ea4f0ee0911f698de17",
"assets/assets/images/Group%25203707.png": "72d45d7a6902e8a71f410cf83b6b23df",
"assets/assets/images/image_01.png": "c6b7c7b3b7844eaf42b2f7188875d39b",
"assets/assets/images/Johir_Raihan.png": "93ed4a91c445cf56ff6ce6509f345c9d",
"assets/assets/images/Kiran_Shakia.png": "c2c1b50bae6f5ea4f0ee0911f698de17",
"assets/assets/images/login_error.gif": "3d17cb7391b0d9cb7d669c20c23a4230",
"assets/assets/images/Masuda_Khan.png": "f029f60ce6f904851d2fc4f2af12836e",
"assets/assets/images/prepre.png": "30afdea11c0ab7931054bed889f0371d",
"assets/assets/images/Salina_Zaman.png": "faa2f625f833e0712197405ac5575b2f",
"assets/assets/images/search_doc_1.png": "e2d82253ef8c28c418d9ed58b3716884",
"assets/assets/images/search_doc_2.png": "61194e42304a9d4b4f8d2362864c9917",
"assets/assets/images/search_doc_3.png": "10ee2ad6cc8539dd0372266fb1152310",
"assets/assets/images/search_doc_4.png": "7703c63dd6070a09710df8a0a7ae716e",
"assets/assets/images/Serena_Gome.png": "d397911bc323411bcb7a61726a9103eb",
"assets/assets/images/splash_background.png": "ab488aac45972f418a6d64c67a70f457",
"assets/assets/images/success.png": "f80df756b315fbb72670a78e82095c3c",
"assets/assets/images/supports.png": "41ea15464e61f3f76070f828c9dcb3b6",
"assets/assets/images/user_pic.png": "83b0744591b3849bf561789f3b872615",
"assets/assets/png/icon_badminton.png": "78e8488bae829236d372cb838966aa42",
"assets/assets/png/icon_basketball.png": "f12f68fb2f697f612d4280c935af24eb",
"assets/assets/png/icon_bill.png": "fb5dd14fab0adad0254b2aef56e053a8",
"assets/assets/png/icon_football.png": "d6cacabe40de592773cd240b2be4c79f",
"assets/assets/png/icon_golf.png": "3235c06143198c3d193bc6b610983006",
"assets/assets/png/icon_hiking.png": "aee0b4b8e324de647d0dcd6d05ff6cf2",
"assets/assets/png/icon_jockgu.png": "f853dfd2967eec5141e4df092a530625",
"assets/assets/png/icon_tabletennis.png": "6544bf9ec518c83d07cacc79477eb6d5",
"assets/assets/png/icon_tennis.png": "e9cdfa5ddba5e4b4b03de537a4f74187",
"assets/FontManifest.json": "a7c163beafc052c544892ae113f9879a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "5a08da00210518a62b26d56eb237805c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/iamport_flutter/assets/images/iamport-logo.png": "2face5c40217bba082ef64aa5c66e9b6",
"assets/packages/kpostal/assets/kakao_postcode_localhost.html": "27eb159f48fb5b0af42e06afe3998688",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d9058ab10534dea6bcc4621c159639b9",
"/": "d9058ab10534dea6bcc4621c159639b9",
"main.dart.js": "161cdfa2fc60d81e1d4003b2aaa76973",
"manifest.json": "f6baeff4d5268d04ebcb8dc06445dbf4",
"version.json": "7843594e9b9f0037a8fb586d9868fe21"
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
