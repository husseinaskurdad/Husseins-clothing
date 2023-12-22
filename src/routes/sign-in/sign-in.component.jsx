import { signInWithGooglePopup, createuserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

let SignIn = () => {

        let logGoogleUser = async () => {
            let {user} = await signInWithGooglePopup();
            let userDocRef = await createuserDocumentFromAuth(user)
        }

    return(
        <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google popup</button>
        </div>
    )
}

export default SignIn