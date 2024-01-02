import MenuContext from './MenuContext.tsx'
import MenuData from './MenuData.tsx'
import { ReactNode } from 'react'

const MenuProvider = ({ children }: { children: ReactNode }) => {
    return (
        <MenuContext.Provider value={MenuData()}>
            {children}
        </MenuContext.Provider>
    )
}
export default MenuProvider
