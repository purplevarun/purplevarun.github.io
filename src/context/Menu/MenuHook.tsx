import { useContext } from 'react'
import MenuContext from './MenuContext.tsx'

const useMenu = () => {
    return useContext(MenuContext)
}
export default useMenu
