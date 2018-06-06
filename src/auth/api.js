import { auth, db } from "../config/firebase";

export function register(data, callback) {
    const { email, password, name, username } = data;
    auth.createUserWithEmailAndPassword(email, password)
        .then((resp) => createUser({ username, uid:resp.user.uid, name, email}, callback))
        .catch((error) => callback(false, null, error));
}

//Create the user object in realtime database
export function createUser (user, callback) {
    var batch = db.batch();

    var newUserRef = db.collection('users').doc(user.uid);
    batch.set(newUserRef, {_id: user.uid, email: user.email, name: user.name, username: user.username});

    var usernamesRef = db.collection('usernames').doc(user.username);
    batch.set(usernamesRef, {uid: user.uid});

    batch.commit()
    .then(() => callback(true, user, null)) 
    .catch((error) => callback(false, null, error));
}

//Sign the user in with their email and password
export function login(email, password, callback) {
    auth.signInWithEmailAndPassword(email, password)
        .then((resp) => getUser(resp.user, callback))//Later will call getUser
        .catch((error) => callback(false, null, error));
}

//Get the user object from the realtime database
export function getUser(user, callback) {
    db.collection('users').doc(user.uid).get()
        .then(function(doc) {

            if (doc.exists) {
                //Get data
                const exists = doc.exists;
                const user = doc.data();
                const data = {exists, user};
                callback(true, data, null);

                console.log(doc.id, " => ", doc.data());
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



function logout (callback) {
    auth.signOut()
        .then(() => {
            if (callback) callback(true, null, null)
        })
        .catch((error) => {
            if (callback) callback(false, null, error)
        });
}

/*


//Sign user in using Facebook
export function signInWithFacebook (fbToken, callback) {
    const credential = provider.credential(fbToken);
    auth.signInWithCredential(credential)
        .then((user) => getUser(user, callback))
        .catch((error) => callback(false, null, error));
}

*/