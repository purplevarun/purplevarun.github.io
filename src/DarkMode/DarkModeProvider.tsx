import DarkModeData from './DarkModeData.tsx'
import DarkModeContext from './DarkModeContext.tsx'
import { ReactNode } from 'react'

const DarkModeProvider = ({ children }: { children: ReactNode }) => {
    const data = DarkModeData()
    return (
        <DarkModeContext.Provider value={data}>
            {children}
        </DarkModeContext.Provider>
    )
}
export default DarkModeProvider
