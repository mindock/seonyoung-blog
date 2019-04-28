import firebase from 'firebase/app';
import 'firebase/auth';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBZCCAovIhgKpQdzjW6es-LB5K-7-65fFw',
    authDomain: 'seonyoung-blog.firebaseapp.com',
    databaseURL: 'https://seonyoung-blog.firebaseio.com',
    projectId: 'seonyoung-blog',
    storageBucket: 'seonyoung-blog.appspot.com',
    messagingSenderId: '862549964785',
  });
}

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
