import { useState } from 'react'

const DarkModeData = () => {
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => setDarkMode((value) => !value)
    return { darkMode, toggleDarkMode }
}
export default DarkModeData
