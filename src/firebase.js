// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD00Az3QAcwoOgbv2LqdpKK29_FBQHV6Eg",
    authDomain: "personality-app-9ae58.firebaseapp.com",
    projectId: "personality-app-9ae58",
    storageBucket: "personality-app-9ae58.appspot.com",
    messagingSenderId: "242767829354",
    appId: "1:242767829354:web:e535f03e81da4a3fbf2d13",
    measurementId: "G-SSVJRL382Z"
  };

  const firebaseApp=initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
 
  async function getPeople(db) {
    const pplCol = collection(db, 'people');
    const pplSnapshot = await getDocs(pplCol);
    const pplList = pplSnapshot.docs.map(doc => doc.data());
    return pplList
}

export default getPeople(db)