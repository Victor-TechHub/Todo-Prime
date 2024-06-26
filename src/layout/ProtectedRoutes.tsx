import React from 'react'
import { Navigate } from 'react-router-dom'
import { PUBLIC_PATH } from '../routes/path'
import { useAuthCtx } from '../context'

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
    const { currentUser } = useAuthCtx()
    return (
        <>
            {
                !!currentUser
                    ? children
                    : <Navigate
                        to={PUBLIC_PATH.SIGNIN}
                        replace
                    />
            }
        </>
    )
}

export default ProtectedRoutes