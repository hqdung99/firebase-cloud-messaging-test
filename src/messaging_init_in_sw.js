import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCP5RSVk-y17ESxoKJuSlAV3rQ61ZmJeyk",
  authDomain: "some-firebase-97dfc.firebaseapp.com",
  projectId: "some-firebase-97dfc",
  storageBucket: "some-firebase-97dfc.appspot.com",
  messagingSenderId: "440905053097",
  appId: "1:440905053097:web:b1dd7466968bac72470ab8",
  measurementId: "G-27PVPDKWY8",
};

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BCKNSY0FAgDlbgevvqBGsXdadLiRCrFR1wbWXqFYgQJOV3jX8nTSHAQzXcB91c6GGlmFwCfCcxCUK_UxDL7nTLA",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
        } else {
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();
