import { useState, useContext } from "react"
import { createAuthUserwithEmailAndPassword, createuserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import './sign-up-form. style.scss'
import Button from "../button/button.component"
import { UserContext } from "../../context/user.context"

let defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

let SignUpForm = () => {
    let [formFields, setFormFields] = useState(defaultFormFields)
    let {displayName, email, password, confirmPassword} = formFields

    let {setCurrentUser} = useContext(UserContext)


    let handleSubmit = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert('passwords ndo not match')
            return;
        }

        let resetFormFields = () => {
            setFormFields(defaultFormFields)
        }

        try {
            let {user} = await createAuthUserwithEmailAndPassword(email, password)

            setCurrentUser(user)

            await createuserDocumentFromAuth(user, { displayName })
            resetFormFields()

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('email already in use')
            }
            else{
                console.log(error)
            }
            
        };
        }

    
    let handleChange = (event) => {
        let {name, value} = event.target;
        setFormFields ({ ...formFields, [name] : value })
    }
      
    return(
        <div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>

            <FormInput
                label='Display Name'
                type="text"
                required
                onChange={handleChange}
                name="displayName"
                value={displayName}
            />


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


            <FormInput
                label='Confirm password'
                type="password" 
                required 
                onChange={handleChange}
                name="confirmPassword"
                value={confirmPassword}
            />

        <Button  type="submit">Sign Up</Button>
        </form>
        </div>
    )
}

export default SignUpForm