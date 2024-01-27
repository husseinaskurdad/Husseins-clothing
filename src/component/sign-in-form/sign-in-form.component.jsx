import { useState, } from "react"
import {createuserDocumentFromAuth, signInWithGooglePopup, signInAuthUserwithEmailAndPassword } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import './sign-in-form. style.scss'
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component"


let defaultFormFields = {
   
    email: '',
    password: '',
 
}

let SignInForm = () => {
        let [formFields, setFormFields] = useState(defaultFormFields)
        let { email, password,} = formFields
        
        let resetFormFields = () => {
        setFormFields(defaultFormFields)
        }

        let signInWithGoogle = async () => {
         await signInWithGooglePopup();
        
        }

        let handleSubmit = async (event) => {
        event.preventDefault()
        try {
           await signInAuthUserwithEmailAndPassword(email, password) ;
          
            resetFormFields()
        } catch (error) {
            if(error.code === 'auth/invalid-credential') {
                alert('invalid email or password')
            }
            console.log(error)
        }
        
        }

        let handleChange = (event) => {
        let {name, value} = event.target;
        setFormFields ({ ...formFields, [name] : value })
        }

      
    return(
        <div className="sign-in-container">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput
                label='Email'
                type="email" 
                required 
                onChange={handleChange}
                name="email"
                value={email}
            />

            <FormInput
                label='Password'
                type="password" 
                required 
                onChange={handleChange}
                name="password" 
                value={password}
            />
          <div className="buttons-container">
          <Button  type="submit">Sign In</Button>
          <Button type= 'button' buttonType= {BUTTON_TYPE_CLASSES.google} onClick ={signInWithGoogle}> Google Sign In </Button>
          </div>
      
        </form>
        </div>
    )
}

export default SignInForm