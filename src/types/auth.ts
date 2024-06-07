import { User } from "firebase/auth"
import { ReactNode } from "react"
import { NavigateFunction } from "react-router-dom"
export interface AuthCtxType {
    signIn: (email: string, password: string, firstName: string, lastName: string, navigate: NavigateFunction) => Promise<void>
    currentUser: User | null
    isSigningNewUser: boolean
    login: (email: string, password: string, navigate: NavigateFunction) => Promise<void>
    isLogging: boolean
}

export type childNode = {
    children: ReactNode
}