const CACHE = "namecard-v1";
const FILES = ["./", "index.html", "style.css", "app.js", "assets/photo.png", "assets/icon-192.png", "assets/icon-512.png", "assets/apple-touch-icon.png", "manifest.webmanifest"];

self.addEventListener("install", (e) => e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES))));
self.addEventListener("fetch", (e) => e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request))));
