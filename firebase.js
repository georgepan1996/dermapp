import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDdWmIpS3hKq4jBIMzOYWw8GNVXPxjmIi8',
  authDomain: 'thestorycreatorapp-6085f.firebaseapp.com',
  projectId: 'thestorycreatorapp-6085f',
  storageBucket: 'thestorycreatorapp-6085f.appspot.com',
  messagingSenderId: '998849769569',
  appId: '1:998849769569:web:e2463d76e434ad6c9efa20',
  measurementId: 'G-SRTFB39YF2',
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

const db = firebase.firestore();

// const currentUser = firebase.auth().currentUser;

// let id;
let data = {
  email: 'email',
  isAdmin: false,
  password: 'password',
  userName: 'userName',
    roleId: 0
};

let roleData = {
    roleName: 'role',
    perms: '',
    roleId: 0
}

// const useruUid = currentUser.uid;

// const userUid = () => {
//   return currentUser.uid;
// };

const handleSignOut = () => {
  auth.signOut().catch((error) => alert(error.message));
};

const handleSignUp = (userName, email, password) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      const currentUser = firebase.auth().currentUser;
      const user = userCredentials.user;
      console.log('Registered with:', user.email);
      console.log('id:', currentUser.uid);

      db.collection('users').doc(currentUser.uid).set({
        userName,
        email,
        password,
          roleid: 3, //id of simple user role
        isAdmin: false,
      });

    })
    .catch((error) => alert(error.message));
};

function fetchUserData(id) {
  const docRef = db.collection('users').doc(id);
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        data = doc.data();
        // data.email = docData.email;
        // data.isAdmin = docData.isAdmin;
        // data.password = docData.password;
        // data.userName = docData.userName;
      } else {
        console.log('No such document!');
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
}

function fetchRolesData(roleId) {
    const docRef = db.collection('roles').where('roleId', '==', roleId)
    console.log('roleId', roleId)
    console.log('docRef', docRef)
    docRef
        .get()
        .then((queryResult) => {
            queryResult.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                roleData = doc.data();
                console.log('roleData', roleData)
            });
        })
        .catch((error) => {
            console.log('Error getting document:', error);
        });
}

// const handleLogin = (email, password) => {
//     let uid;
//     return auth
//         .signInWithEmailAndPassword(email, password)
//         .then((userCredentials) => {
//
//             const currentUser = firebase.auth().currentUser;
//             const user = userCredentials.user;
//             uid = currentUser.uid;
//
//             fetchUserData(currentUser.uid);
//
//             console.log('Logged in with:', currentUser.email);
//         })
//         .catch((error) => alert(error.message));
// };

const handleLogin = (email, password) => {
  return auth
    .signInWithEmailAndPassword(email, password)

};

export { auth, db, handleSignUp, handleLogin, handleSignOut, fetchRolesData, roleData, data };
