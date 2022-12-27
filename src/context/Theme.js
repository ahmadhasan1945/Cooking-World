import { createContext, useReducer } from "react"

export const Theme = createContext()
const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {...state, color: action.payload}
        case 'CHANGE_MODE':
            return {...state, mode:action.payload}
        default:
            return state
    }
}

export function ThemeProvider({children}) {
    const [state, dispatch] = useReducer(themeReducer, {color:'purple', mode:'light'})

    const changeColor = (color) => {
        dispatch({type: 'CHANGE_COLOR', payload: color})
    }

    const changeMode = (mode) => {
        dispatch({type: 'CHANGE_MODE', payload: mode})
    }
    return(
        <Theme.Provider value={{...state, changeColor, changeMode}}>
            {children}
        </Theme.Provider>
    )
}