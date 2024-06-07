import { createContext, useContext } from "react"
import { childNode } from "../types/Task"
import useLocalStorage from "use-local-storage"
const ThemeCtx = createContext({
    isDarkTheme: false,
    toggleTheme: () => { }
})

export const ThemeCtxProvider = ({ children }: childNode): JSX.Element => {
    const [isDarkTheme, setIsDarkTheme] = useLocalStorage("THEME", false)

    const toggleTheme = (): void => setIsDarkTheme((state) => !state)

    const values = {
        isDarkTheme,
        toggleTheme
    }

    return <ThemeCtx.Provider value={values}>{children}</ThemeCtx.Provider>
}

export const useThemeCtx = () => useContext(ThemeCtx)