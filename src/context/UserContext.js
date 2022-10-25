import { createContext, useEffect, useState } from "react"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../firebase/firebaseConfig"

export const UserContextApi = createContext()
export const UserContextProvider = ({ children }) => {



    const [currentUser, setCurrentUser] = useState(null)
    // console.log(currentUser)
    // console.log("isAdmin >>", isAdmin)


    // useEffect(() => {
    //     if (currentUser?.email.includes("kodirov8788@gmail.com")) {
    //         setIsAdmin(true)
    //     }
    //     else {
    //         setIsAdmin(false)
    //     }
    // }, [currentUser])


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
            } else {
                setCurrentUser(null)
            }
        });
    }, [])

    return (<UserContextApi.Provider value={{ currentUser }}>{children}</UserContextApi.Provider>)
}


