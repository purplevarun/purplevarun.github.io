import { useEffect, useState } from 'react'

const DarkModeData = () => {
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => setDarkMode((value) => !value)

    // auto dark mode after 3 seconds
    useEffect(() => {
        setTimeout(() => {
            setDarkMode(true)
        }, 3000)
    }, [])

    return { darkMode, toggleDarkMode }
}
export default DarkModeData
