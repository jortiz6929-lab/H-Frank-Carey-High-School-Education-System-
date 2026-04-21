/* * 1. Import core scripts. 
 * Ensure these filenames match your GitHub exactly. 
 */
importScripts('uv.bundle.js', 'uv.config.js', 'uv.sw.js');

// 2. Safety check: If the config didn't load, stop here to prevent a crash.
if (!self.__uv$config) {
    console.error("Ultraviolet config not found. Check your uv.config.js file.");
}

const sw = new UVServiceWorker();

// 3. Force the worker to start working immediately on iPad
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // This allows the site to work without needing a manual refresh
    event.waitUntil(self.clients.claim());
});

// 4. Handle the actual proxying of websites
self.addEventListener('fetch', (event) => {
    event.respondWith(sw.fetch(event));
});
