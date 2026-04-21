/* * H. Frank Carey - Service Worker Engine
 * This file handles the "heavy lifting" of proxying the websites.
 */

// 1. Import core scripts. These must be in your main GitHub folder.
importScripts('uv.bundle.js', 'uv.config.js', 'uv.sw.js');

// 2. Initialize the proxy worker
const sw = new UVServiceWorker();

// 3. Force the worker to start immediately (Crucial for Safari/iPad)
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // This allows the proxy to take control of the page as soon as it's ready
    event.waitUntil(self.clients.claim());
});

// 4. Intercept and proxy all web requests
self.addEventListener('fetch', (event) => {
    event.respondWith(sw.fetch(event));
});
