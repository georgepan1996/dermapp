import { getMessaging, getToken } from 'firebase/messaging';

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
getToken(messaging, {
  vapidKey:
    'BFB0tfMxcvnpF9m0sgIbWJcTDXKxw2C4_DoyeUq_aYTYddjn6Vv9Sv0IATErRjVri-Iah7Le_mkR1cq7o6wOvSQ',
})
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
    } else {
      // Show permission request UI
      console.log(
        'No registration token available. Request permission to generate one.'
      );
      // ...
    }
  })
  .catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });
