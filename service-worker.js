const CACHE_NAME = 'toko-elektronik-cache-v1';
const CACHE_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/assets/images/product1.jpg',
  '/assets/images/product2.jpg',
  '/assets/images/product3.jpg',
  '/assets/images/product4.jpg'
];

// Event untuk Install Service Worker dan Cache Aset
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching all assets');
      return cache.addAll(CACHE_ASSETS);
    })
  );
});

// Event untuk Fetching dan Mengambil dari Cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Mengambil dari cache jika ada
        return cachedResponse;
      }

      // Jika tidak ada di cache, ambil dari jaringan
      return fetch(event.request);
    })
  );
});

// Event untuk Aktifkan Service Worker dan Hapus Cache yang Lama
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            // Menghapus cache lama
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
