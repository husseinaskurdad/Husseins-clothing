// import { useEffect } from "react";
// import { getRedirectResult } from 'firebase/auth'
import SignUpForm from "../../component/sign-up-form/sign-up-form.cpmponent";


import { signInWithGooglePopup, createuserDocumentFromAuth, } from "../../utils/firebase/firebase.utils"

let SignIn = () => {


        let logGoogleUser = async () => {
            let {user} = await signInWithGooglePopup();
            let userDocRef = await createuserDocumentFromAuth(user)
        }


    return(
        <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google popup</button>
       <SignUpForm/>

        </div>
    )
}

export default SignIn































// useEffect(() => {
//     async function fetchData() {
//       // You can await here
//       const response = await MyAPI.getData(someId);
//       // ...
//     }
//     fetchData();
//   }, [someId]); // Or [] if effect doesn't need props or state

    // useEffect(() => {
    //     async function fetchData() {
    //         let response = await getRedirectResult(auth);
    //         if(response) {
    //             let userDocRef = await createuserDocumentFromAuth(response.user)
    //         }
            
    //     }
    //     fetchData()
    // } , []);

            // let logGoogleRedirectUser = async () => {
        //     let {user} = await signInWithGoogleRedirect();
        //     console.log(user)
            
        // }