// KGN.R Atelier Service Worker - Instant Image Caching & Offline Acceleration
const CACHE_NAME = 'kgnr-cache-v1';

const PRECACHE_ASSETS = [
  '/',
  '/hero.webp',
  '/hero.png',
  '/card.webp',
  '/card.png',
  '/assets/logo.png',
  '/collections/1.webp',
  '/collections/2.webp',
  '/collections/3.webp',
  '/collections/4.webp',
  '/collections/5.webp',
  '/collections/6.webp',
  '/collections/7.webp',
  '/collections/8.webp',
  '/collections/9.webp',
  '/collections/10.webp',
  '/collections/11.webp',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('Pre-cache warning (some non-critical assets skipped):', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Cache-First Strategy for Images & Collections
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Apply cache-first to collection images and static media assets
  const isImageOrMedia =
    url.pathname.startsWith('/collections/') ||
    url.pathname.includes('hero') ||
    url.pathname.includes('card') ||
    url.pathname.endsWith('.webp') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.svg');

  if (isImageOrMedia) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        });
      })
    );
  }
});
