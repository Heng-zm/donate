// sw.js - Basic Service Worker for PWA prompt

self.addEventListener('install', (event) => {
  // console.log('Service Worker: Installing...');
  // Optionally add assets to cache here if needed for offline use
});

self.addEventListener('activate', (event) => {
  // console.log('Service Worker: Activating...');
});

self.addEventListener('fetch', (event) => {
  // console.log('Service Worker: Fetching ', event.request.url);
  // Basic pass-through fetch - no offline caching implemented here
  event.respondWith(fetch(event.request));
});
