// Service Worker v1.0.0

(function() {
  'use strict';

  self.addEventListener('install', function(event) {
    console.log('Service worker installing...');
    self.skipWaiting();
  });
  
  self.addEventListener('activate', function(event) {
    console.log('Service worker activating...');

    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(validateResponse)
    .catch(logError);

  });


  self.addEventListener('fetch', function(event) {
    console.log('Fetching:', event.request.url);
  });

  function validateResponse(response) {

    
    if (!response.ok) {
      throw Error(response.statusText);
    }
    console.log(response.json());
  }

  function logError(error) {
    console.log('Looks like there was a problem: \n', error);
  }

})();
