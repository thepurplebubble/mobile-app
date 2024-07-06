import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: 'your_api_key',
    authDomain: 'your_auth_domain',
    projectId: 'your_project_id',
    storageBucket: 'your_storage_bucket',
    messagingSenderId: 'your_messaging_sender_id',
    appId: 'your_app_id',
    measurementId: 'your_measurement_id'
  };
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});

export { db, auth };