import * as firebase from 'firebase';
import * as c from './constants';

const config = {
    apiKey: c.FIREBASE_API_KEY,
    authDomain: c.FIREBASE_AUTH_DOMAIN,
    projectId: c.FIREBASE_PROJECT_ID,
};

firebase.initializeApp(config);

// Required for side-effects
require("firebase/firestore");

export const db = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings);

export const auth = firebase.auth();