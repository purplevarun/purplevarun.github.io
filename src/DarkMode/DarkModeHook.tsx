import { useContext } from 'react'
import DarkModeContext from './DarkModeContext.tsx'

const useDarkMode = () => {
    return useContext(DarkModeContext)
}
export default useDarkMode
