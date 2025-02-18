import { createTheme, ThemeProvider } from "@mui/material"
import { createContext, useEffect, useState } from "react"
import { ColorModeProps, CustomThemeOptions } from "./interfaces"

export const ColorModeContext = createContext<ColorModeProps>({
    mode: 'dark',
    toggleColorMode: () => {}
})

export default function ToggleColorMode({children}: any) {
    const [mode, setMode] = useState("dark")
    const theme = createTheme({palette: {mode: mode}} as CustomThemeOptions)

    const toggleColorMode = () => {
        setMode(prevState => (prevState === 'light' ? 'dark' : 'light'))
    }

    useEffect(() => {
        localStorage.setItem('theme', mode)
    }, [mode])

    useEffect(() => {
        const modeFromLocalStorage = localStorage.getItem('theme')
        if (modeFromLocalStorage) {
            setMode(modeFromLocalStorage)
        } else {
            localStorage.setItem('theme', 'light')
        }
    }, [])

    return (
        <ColorModeContext.Provider value={{mode, toggleColorMode}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
