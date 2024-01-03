import { useState } from 'react'

const DarkModeData = () => {
    const [darkMode, setDarkMode] = useState(true)
    const toggleDarkMode = () => setDarkMode((value) => !value)
    return { darkMode, toggleDarkMode }
}
export default DarkModeData
