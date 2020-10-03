// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  cloudName: 'pwaws',
  uploadPreset: 'rmfqo2i9',
  firebase: {
    apiKey: "AIzaSyAuYKDsM1VLjJpKSNPA-MzOG9tI5vbrIME",
    authDomain: "pwa-workshop-86b4c.firebaseapp.com",
    databaseURL: "https://pwa-workshop-86b4c.firebaseio.com",
    projectId: "pwa-workshop-86b4c",
    storageBucket: "pwa-workshop-86b4c.appspot.com",
    messagingSenderId: "32091744200",
    appId: "1:32091744200:web:6af27c6bbef6fc620602fd",
    firestore: {
      cacheSizeBytes: 99999999999
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
