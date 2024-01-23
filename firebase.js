import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAdCvkBEzW9l91oXNkKlVv9q9tbdYW0PV8',
  authDomain: 'facebook-clone-30f86.firebaseapp.com',
  projectId: 'facebook-clone-30f86',
  storageBucket: 'facebook-clone-30f86.appspot.com',
  messagingSenderId: '770053273256',
  appId: '1:770053273256:web:b62c437fe20953c037749d',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()
const db = app.firestore()
const storage = firebase.storage()

export { db, storage }
