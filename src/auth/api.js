import { auth, db } from "../config/firebase";

export function register(data, callback) {
    const { email, password, name, username } = data;
    auth.createUserWithEmailAndPassword(email, password)
        .then((resp) => createUser({ username, uid:resp.user.uid, name }, callback))
        .catch((error) => callback(false, null, error));
}

//Create the user object in realtime database
export function createUser (user, callback) {
    var batch = db.batch();

    var newUserRef = db.collection('users').doc(user.uid);
    batch.set(newUserRef, {name: user.name, username: user.username});

    var usernamesRef = db.collection('usernames').doc(user.username);
    batch.set(usernamesRef, {uid: user.uid});

    batch.commit()
    .then(() => callback(true, user, null)) 
    .catch((error) => callback(false, null, error));
}

//Sign the user in with their email and password
export function login(email, password, callback) {
    auth.signInWithEmailAndPassword(email, password)
        .then((resp) => callback(true, null, null)) //Later will call getUser
        .catch((error) => callback(false, null, error));
}

//Get the user object from the realtime database
export function getUser(user, callback) {
    db.collection('users').doc(user.uid).get()
        .then(function(doc) {

            if (doc.exists) {
                //Get data
                callback(true, doc.data, null);
            }

        })
        .catch(error => callback(false, null, error));
} 

//Send Password Reset Email
export function resetPassword(email, callback) {
    auth.sendPasswordResetEmail(email)
        .then((user) => callback(true, null))
        .catch((error) => callback(false, error));
}

/*

export function signOut (callback) {
    auth.signOut()
        .then(() => {
            if (callback) callback(true, null, null)
        })
        .catch((error) => {
            if (callback) callback(false, null, error)
        });
}


//Sign user in using Facebook
export function signInWithFacebook (fbToken, callback) {
    const credential = provider.credential(fbToken);
    auth.signInWithCredential(credential)
        .then((user) => getUser(user, callback))
        .catch((error) => callback(false, null, error));
}

*/