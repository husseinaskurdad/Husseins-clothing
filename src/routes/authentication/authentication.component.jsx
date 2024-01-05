// import { useEffect } from "react";
// import { getRedirectResult } from 'firebase/auth'
import SignUpForm from "../../component/sign-up-form/sign-up-form.cpmponent";
import SignInForm from "../../component/sign-in-form/sign-in-form.component";
import './authentication.style.scss'
// import { signInWithGooglePopup, createuserDocumentFromAuth, } from "../../utils/firebase/firebase.utils"

let Authentication = () => {

    return(
        <div className="authentication-container">
        <SignInForm/>
        <SignUpForm/>

        </div>
    )
}

export default Authentication































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