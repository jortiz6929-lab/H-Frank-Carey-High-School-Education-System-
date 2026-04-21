/* H. Frank Carey - Final Service Worker Manager */

importScripts(
    'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.0.2/dist/uv.bundle.js',
    'uv.config.js',
    'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.0.2/dist/uv.sw.js'
);

const sw = new UVServiceWorker();

// Force immediate activation to stop the "initializing" loop
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (event) => {
    event.respondWith(sw.fetch(event));
});
