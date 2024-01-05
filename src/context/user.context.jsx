import { SignOutUser } from "../utils/firebase/firebase.utils";
import { createuserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

export let UserContext = createContext({
    currentuser : null,
    setCurrentUser: () => null,
});

// export let UserProvider = ({ children }) => {
//     return <userContext.Provider value={}>{children}</userContext.Provider>
// } 


export let UserProvider = ({ children }) => {

    let [currentUser, setCurrentUser] = useState(null);
    let value = {currentUser, setCurrentUser}

    



    useEffect (() => {
      let unsubcribe = onAuthStateChangedListener((user) => {
       if (user) {
         createuserDocumentFromAuth(user)
       }
       setCurrentUser(user)

        return unsubcribe
      })
    }, [])

    // basically, the above call back is saying,whenever this auth sate changes, I want you to log my user..
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

// essentiallly alllow any of its child conponent to access any of the values inside of its use state

// want to be ablt to call the setter and get the value any where inside of the component tree that is nested within the actual provider value