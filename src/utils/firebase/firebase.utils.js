import { initializeApp } from 'firebase/app';
import {
        getAuth,
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged,
    } from 'firebase/auth'

import {
    getFirestore,
    doc, 
    getDoc,
    setDoc
} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCT_1FpibACDeyk24eNBby2K4T1FahiFxY",
    authDomain: "hussein-s-clothing.firebaseapp.com",
    projectId: "hussein-s-clothing",
    storageBucket: "hussein-s-clothing.appspot.com",
    messagingSenderId: "1089097816056",
    appId: "1:1089097816056:web:13cff9cf19d0506a6fe80d"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  let provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  })

  export let auth = getAuth(); 
  export let signInWithGooglePopup= () => signInWithPopup(auth, provider)
  export let signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

  export let db = getFirestore( )

  export let createuserDocumentFromAuth = async (userAuth, additionalInformation) => {
    let userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef)

    let userSnapshot = await  getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists())


    if(!userSnapshot.exists()) {
        let {displayName, email} = userAuth;
        let createdAt = new Date();

        try {
            await setDoc(
              userDocRef, 
              {displayName, email, createdAt, ...additionalInformation});
        } catch (error) {
            console.log('error in creating the user', error.message)
        }
    }

    return userDocRef
  };

  export let createAuthUserwithEmailAndPassword = async (email, password) => {

    // if(!email  !password) return
    return await createUserWithEmailAndPassword(auth, email, password)
  }

  export let signInAuthUserwithEmailAndPassword = async (email, password) => {

    // if(!email  !password) return
    return await signInWithEmailAndPassword(auth, email, password)
  }

  export let SignOutUser = async () => await signOut(auth)

  export let onAuthStateChangedListener = (callBack) =>{
    callBack && onAuthStateChanged(auth, callBack)
  } 

