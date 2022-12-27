import { useContext } from 'react' 
import { Theme } from '../context/Theme'

export const useTheme = () => {
    const context = useContext(Theme)

    if (context === undefined) {
        throw new Error ('useTheme() must be used inside a ThemeProvider')
    }

    return context
}