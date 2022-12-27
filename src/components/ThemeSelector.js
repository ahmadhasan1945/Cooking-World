import { useTheme } from '../hooks/useTheme'
import modeIcon from '../assets/mode-icon.svg'

import './ThemeSelector.css'

const themeColors = ['darkgreen', 'hotpink', 'gold']

export default function ThemeSelector() {
    const {changeColor, changeMode, mode} = useTheme()

    const toggleMode = () => {
        changeMode(mode === 'light' ? 'dark' : 'light')
    }
    console.log(mode)
  return (
    <div className='theme-selector'>
        <div className='mode-switcher'>
            <img src={modeIcon} onClick={toggleMode} style={{filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}} />
        </div>
        <div className='theme-button'>
            {themeColors.map(color => (
                <div key={color} 
                onClick={() => changeColor(color)}
                style={{background: color}} />
            ))}
        </div>

    </div>
  )
}

