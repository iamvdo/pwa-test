// sw.js v2

// install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('nom_du_cache')
      .then((cache) => {
        return cache.addAll([
          './',
          'index.html',
          'styles.css',
          'imgs/a.jpg',
          'imgs/b.jpg',
          'imgs/c.jpg',
          'imgs/d.jpg',
       ]);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// fetch event
self.addEventListener('fetch', (event) => {
  console.log('fetch');
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});