import { createContext, useContext, useState } from "react"
import { childNode } from "../types/Task"

const ThemeCtx = createContext({
    isDarkTheme: false,
    toggleTheme: () => { }
})

export const ThemeCtxProvider = ({ children }: childNode): JSX.Element => {
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const toggleTheme = (): void => setIsDarkTheme((state) => !state)

    const values = {
        isDarkTheme,
        toggleTheme
    }

    return <ThemeCtx.Provider value={values}>{children}</ThemeCtx.Provider>
}

export const useThemeCtx = () => useContext(ThemeCtx)