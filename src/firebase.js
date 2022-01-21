import firebase from 'firebase';	

const firebaseConfig = {
  apiKey: "AIzaSyBXOk1haiKsx6qbN1dBAJ3A9BCCzI6I8F8",
  authDomain: "caetreinazap.firebaseapp.com",
  projectId: "caetreinazap",
  storageBucket: "caetreinazap.appspot.com",
  messagingSenderId: "544666218795",
  appId: "1:544666218795:web:ecdad4aabab2361419d56e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
