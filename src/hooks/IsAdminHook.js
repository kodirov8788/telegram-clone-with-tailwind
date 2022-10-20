import { useState, useEffect } from "react"

export const useISADMIN = (argument) => {
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        if (argument?.email.includes("kodirov8788@gmail.com")) {
            setIsAdmin(true)
        }
        else {
            setIsAdmin(false)
        }
    }, [argument])

    return { isAdmin }
}