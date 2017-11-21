// Service Worker v1.0.3

(function() {
  'use strict';

  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('static-cache-v1')
      .then(function(cache) {
        return cache.addAll([
          '.',
          'index.html',
          'index.css',
          'pages',
          'http://fonts.googleapis.com/css?family=Roboto:300,400,500,700',
          'images/still_life-1600_large_2x.jpg',
          'images/still_life-800_large_1x.jpg',
          'images/still_life_medium.jpg',
          'images/still_life_small.jpg',
          'images/horses-1600_large_2x.jpg',
          'images/horses-800_large_1x.jpg',
          'images/horses_medium.jpg',
          'images/horses_small.jpg',
          
        ]);
      })
    );
    console.log('Service worker installing...');
    self.skipWaiting();
  });
  
  self.addEventListener('activate', function(event) {
    console.log('Service worker activating...');
  });


  self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request)
    .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
    );
    console.log('Fetching:', event.request.url);
  });

})();
