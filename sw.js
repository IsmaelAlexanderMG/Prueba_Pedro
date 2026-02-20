const CACHE_NAME = "pwa-v1";

const assets = [
    "/Pagina-Batman/",
    "/Pagina-Batman/index.html",
    "/Pagina-Batman/styles.css",
    "/Pagina-Batman/script.js",
    "/Pagina-Batman/manifest.json",
    "/Pagina-Batman/icon-192.png",
    "/Pagina-Batman/icon-512.png"
];

self.addEventListener("install", evt => {
    evt.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", evt => {
    evt.respondWith(
        caches.match(evt.request).then(res => {
            return res || fetch(evt.request);
        })
    );
});