/* * H. Frank Carey - Service Worker Engine
 * This file must be named sw.js and sit in the root folder.
 */

importScripts('uv.bundle.js', 'uv.config.js', 'uv.sw.js');

// Safety Check: Ensure the config actually loaded
if (!self.__uv$config) {
    console.error("Ultraviolet config not found! Ensure uv.config.js is in the same folder.");
}

const sw = new UVServiceWorker();

// Force the worker to start immediately (fixes iPad "hanging" issues)
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // Allows the proxy to take control without needing a page refresh
    event.waitUntil(self.clients.claim());
});

// The core function that fetches the websites
self.addEventListener('fetch', (event) => {
    event.respondWith(sw.fetch(event));
});
