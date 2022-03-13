'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "loading.webp": "843d3736a9ab1d2daf725000b8939bf0",
".git/objects/aa/adb31bd73c561040c363d68c7c8d367f91b92d": "3aa58d32eedb9cc40fc30c231dfe5390",
".git/objects/83/9626f258116edc7560614de179214f56f519c2": "c618695ca00ea75bca5b218568f948cb",
".git/objects/f3/b1dc8ce3028eb05896408b4bc3db4f35f29240": "bac57d199a1af499a10d5207c285d8e5",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/60/2ac9b05756e16f644ed3f9d67858a040201440": "69632e806f2d99c2e585531543ad4161",
".git/objects/35/ca1e0277c0760b9a02de8a2f89ad46d22f7137": "206e98dbe3eaf930f71959842c96e288",
".git/objects/9c/8a948d27552354f77d267f4a93138cee614796": "85cadfda1e86392d44ce6c42f5f022d1",
".git/objects/86/f693f81732ebf329d0e925b234a0f0240dee6e": "5c7c5a166bd9cd97c595a3d584da27ce",
".git/objects/a2/4f20ecee15bf7050227615a266cf73bf01eb32": "ba29acc55291849f763b8a0096104177",
".git/objects/ad/c30f1108735cb84453bdc11f966acdfdac424c": "b10f49dcadcff8ab8e9dd3ad26c861c7",
".git/objects/94/53d967c1eb1e912ccd77d8fe2f108be0b3fdd2": "8251a00dbccce357c877e12776b50d32",
".git/objects/d8/b7fe3fa8f9cff5314dd7daabd2145b03ce0cbb": "4b4bd69e36dc39a33e46cbbb36ec08fe",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/dd/a1ba194899b61fa028177c00af5114ea084128": "be507c649fcfda89e4e122d2e10b5eac",
".git/objects/64/b18b76768bcaa512acef9c5041afb7d27e4908": "f41413dded6478bae695df8f58971728",
".git/objects/7b/6d96c704dff79f5c7daa8530e32996f841b913": "e20f53f4fb4f6abae62840669b9bc1f0",
".git/objects/92/67cd2f7ae544e5291dc68ac4cfcfed32c27d1d": "eff6e8b823982dae14cec05b889cb389",
".git/objects/17/520b137a8e3405c6ed7d5b20eec3c2fa3be781": "34c48cc6c862436029ebebe8b3fb5674",
".git/objects/f5/c55ac6d3ada0a0dacc27b642d273e4544c1045": "d7adb0ec5be2d2b12faf0b02cf72a4c3",
".git/objects/7c/57954607a084f1a65ceda6e031838f21877ab9": "d8ec1a06f86a4ff41d460612e52d06d0",
".git/objects/26/e90b953cdc956f018e2dd0024ba356ded4e5b4": "b34892d1dc31c926ff1f111b20597c1b",
".git/objects/ee/a20a7972264e1a8e492384792ded24318c72bc": "bddf67b01caa0db4d7d5dcbc05f13f64",
".git/objects/5e/832d08db495f3efe719ac88ca7113e1d65b5b4": "7618e5f9d8a624f965593cd9d0fdc8f9",
".git/objects/2f/dbab702115f8b11accb1808082ddb327da0eea": "558fc9a7369cc6b3058a06b6df9cb1d9",
".git/objects/ac/a5fbc9f32f60bd006b757f12de427ff63ef999": "ad6f6a525c4ab88442b3211b99ccb597",
".git/objects/82/0c46e3bb40d7ffd404e99e45a834db91661a58": "14488533b3d6f48366e150e6e1d04d82",
".git/objects/b1/4cf83e11b4b2d759709e327b8f02df7820a943": "edc9e8c8d284952f8ef28d06ece387f3",
".git/objects/4e/59b1728f734ee51dd13c2ee1275eb99895e412": "bf04730591b80ca78319f3d8dad7839c",
".git/objects/2a/05740501d37b2bc4f741d8abc5b04c266af141": "6b0b09071b0c0116b490eea1305f2f6f",
".git/objects/ba/fa17866ef1f2a3c3ae1031c63e651452e1ca9b": "8ebbaba4632c3b4f10de5602beaacac3",
".git/objects/56/0f17e823faf11d7e9a7bdd2a0ea232b5f9dbf2": "5b6e9f5776edfdaf3a14450c455e8a90",
".git/objects/d7/c1dc9eb14906d8423197f46cfc0c2877a08b96": "9c2595df41f65a13d4f2b687b6fbc0e6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/ORIG_HEAD": "dd2f7c68f9e4e3e7af7f30d96e71d2f0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "142d84e3f7c1f8efbd38e0ec76f280ea",
".git/FETCH_HEAD": "c14a7860f797e913b2c68269b114dfed",
".git/refs/heads/main": "1d86ecc9880155bc97d97a3862e96511",
".git/refs/remotes/origin/main": "1d86ecc9880155bc97d97a3862e96511",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/index": "1396b840ff7b44c7e311bf8cd9d4ceb0",
".git/logs/HEAD": "0fe4ce04ed4063c428077b8f12659a23",
".git/logs/refs/heads/main": "bac0d974c4377fa5f899317f47df7ddc",
".git/logs/refs/remotes/origin/main": "0a71b91d3dfe872e2c7ef1f48ca400a9",
"manifest.json": "1492101b620619b729c477d7bd73dc14",
"canvaskit/profiling/canvaskit.wasm": "c6681b1a749ad902eefcba11fed1cb3f",
"canvaskit/profiling/canvaskit.js": "411ee45f5abb57975ee5243310c6953e",
"canvaskit/canvaskit.wasm": "efe4a5da0205bb8d8c5aca7dad981abd",
"canvaskit/canvaskit.js": "f00de1f742223b7cf4cec1c2a0cd9764",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/FontManifest.json": "c2edd51f67b5bcfd6509941c02565e79",
"assets/assets/fonts/Rubik-SemiBold.ttf": "a840e539f4f9f5b8ceb038072848ae2f",
"assets/assets/fonts/Rubik-Light.ttf": "a511edd89a551e8f0db621724e1f93bd",
"assets/assets/images/game-play-min.gif": "6341b8c257a07f9f72c104781ee9b732",
"assets/assets/images/box-base.png": "8d6b33d5e5528aefdaab7abeef9c767c",
"assets/assets/images/box-top.png": "bf360c5df29e0525ebe6d7b349392337",
"assets/AssetManifest.json": "6b39a44fb32700b31df742a6f41354b5",
"assets/NOTICES": "f1c7a507733f3997f69a839b96d3c0c5",
"version.json": "0cf1b76338f5e3c69f08f0a509c79b53",
"main.dart.js": "7389659fa5f9bd2f4c2df85eae115389",
"favicon.png": "1d043bee7cb79485708f82453dbd2f41",
"index.html": "04f9d2c182ee7d2c204ae236428aaeda",
"/": "04f9d2c182ee7d2c204ae236428aaeda",
"icons/Icon-maskable-512.png": "4a15d5e493a61a3edb978a7de4b23dbd",
"icons/Icon-512.png": "cd6884ff0cba5bc0df8ee5776898d3b4",
"icons/Icon-maskable-192.png": "fcccb8705a9b59276282c86fc38db29a",
"icons/Icon-192.png": "a35d256beba813f4bfcfc3eaca9b01f4"
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
