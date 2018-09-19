(function () {
  'use strict';

  const unregister = () => {
    if (window.navigator && navigator.serviceWorker) {
      navigator.serviceWorker.getRegistrations()
        .then((registrations) => {
          for (let registration of registrations) {
            registration.unregister();
          }
        });
    }
  };

  window.addEventListener('load', unregister);
})();
