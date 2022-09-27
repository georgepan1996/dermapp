import { initializeApp } from 'firebase/app';
import { getMessaging } from "firebase/messaging";


import {
  getFirestore,
  collection,
  getDoc,
  getDocs,
  doc,
  setDoc,
  query,
  updateDoc,
  where,
  deleteDoc,
} from 'firebase/firestore/lite';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDdWmIpS3hKq4jBIMzOYWw8GNVXPxjmIi8',
  authDomain: 'thestorycreatorapp-6085f.firebaseapp.com',
  projectId: 'thestorycreatorapp-6085f',
  storageBucket: 'thestorycreatorapp-6085f.appspot.com',
  messagingSenderId: '998849769569',
  appId: '1:998849769569:web:e2463d76e434ad6c9efa20',
  measurementId: 'G-SRTFB39YF2',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const handleSignOut = () => {
  console.log('handleSignOut run');
  signOut(auth)
    .then((res) => console.log('sign out was successful'))
    .catch((err) => console.error('error on sign out', err));
};

const signUp = (username, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const currentUser = auth.currentUser;
      const user = userCredentials.user;

      console.log('Registered with:', user.email);
      console.log('id:', currentUser.uid);

      const userRef = doc(db, 'users', currentUser.uid);
      setDoc(userRef, {
        username,
        email,
        password,
        roleid: 3, //id of simple user role
        isAdmin: false,
      })
        .then((res) => {
          console.log('user', user, 'added successfully with result', res);
        })
        .catch((err) => console.error('user add error', err));
    })
    .catch((err) => console.error('user sign up error', err.message));
};
const signIn = (email, password) => {
  console.log('sign in args', auth, email, password);
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      console.log('successful sign in', res);
    })
    .catch((err) => console.error('error on sign in', err));
};

const addArticle = (title, content, imageUrl, isFavorite) => {
  const docRef = collection(db, 'posts');

  setDoc(doc(docRef), {
    content,
    // id: id, // Most secure way must be found
    imageUrl,
    isFavorite,
    title,
  });
};

let data = {
  email: 'email',
  isAdmin: false,
  password: 'password',
  userName: 'userName',
  roleId: 0,
};

let roleData = {
  roleName: 'role',
  perms: '',
  roleId: 0,
};

export {
  auth,
  db,
  addArticle,
  signIn,
  signOut,
  signUp,
  handleSignOut,
  onAuthStateChanged,
  collection,
  getDoc,
  getDocs,
  doc,
  updateDoc,
  setDoc,
  roleData,
  data,
  deleteDoc,
  query,
  where,
};
