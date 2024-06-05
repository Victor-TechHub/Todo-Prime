import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useContext, createContext, useState } from "react"
import { auth, database } from "../lib/firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { toast } from "react-toastify"
import { NavigateFunction } from "react-router-dom"
import { PRIVATE_PATH, PUBLIC_PATH } from "../routes/path"
import { AuthCtxType, childNode } from "../types/auth"

const AuthCtx = createContext<AuthCtxType>({
    signIn: async () => { },
    currentUser: null,
    isSigningNewUser: false,
    login: async () => { },
    isLogging: false
})

export const AuthCtxProvider = ({ children }: childNode): JSX.Element => {
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [isSigningNewUser, setIsSigningNewUser] = useState(false)
    const [isLogging, setIsLogging] = useState(false)

    const signIn = async (email: string, password: string, firstName: string, lastName: string, navigate: NavigateFunction): Promise<void> => {
        try {
            setIsSigningNewUser(true)

            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(user, {
                displayName: `${firstName} ${lastName}`
            })

            // add user to database
            await addDoc(collection(database, "users"), {
                id: user.uid,
                firstName,
                lastName,
                email,
                password,
                createdAt: serverTimestamp()
            })
            toast.success(`😊 Welcome aboard, ${firstName} We're thrilled to have you.`)
            setIsSigningNewUser(false)
            setTimeout(() => navigate(PUBLIC_PATH.SIGNIN), 5000)
        } catch (err) {
            err instanceof Error && toast.error(err.message)
            setIsSigningNewUser(false)
        }
    }

    const login = async (email: string, password: string, navigate: NavigateFunction): Promise<void> => {
        try {
            setIsLogging(true)
            const { user } = await signInWithEmailAndPassword(auth, email, password)
            setCurrentUser(user)
            toast.success(`😊 Welcome back, ${user.displayName}!`)
            setIsLogging(false)
            setTimeout(() => navigate(PRIVATE_PATH.DASHBOARD), 5000)

        } catch (err) {
            err instanceof Error && toast.error(err.message)
            setIsLogging(false)
        }
    }

    const values = {
        signIn,
        currentUser,
        isSigningNewUser,
        login,
        isLogging
    }

    return <AuthCtx.Provider value={values}> {children} </AuthCtx.Provider>
}

export const useAuthCtx = () => useContext(AuthCtx)