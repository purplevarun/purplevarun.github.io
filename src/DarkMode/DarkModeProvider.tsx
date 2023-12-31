import DarkModeData from './DarkModeData.tsx'
import DarkModeContext from './DarkModeContext.tsx'
import { ReactNode } from 'react'

const DarkModeProvider = ({ children }: { children: ReactNode }) => {
    return (
        <DarkModeContext.Provider value={DarkModeData()}>
            {children}
        </DarkModeContext.Provider>
    )
}
export default DarkModeProvider
