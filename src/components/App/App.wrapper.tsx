import { ReactNode } from 'react'
import { BLACK, TRANSITION, WHITE } from '../../constants/Constants.ts'
import useDarkMode from '../../context/DarkMode/DarkModeHook.tsx'

const AppWrapper = ({ children }: { children: ReactNode }) => {
    const { darkMode } = useDarkMode()
    return (
        <div
            style={{
                transition: TRANSITION,
                background: darkMode ? BLACK : WHITE,
                color: darkMode ? WHITE : BLACK,
                minHeight: '100vh',
            }}
        >
            {children}
        </div>
    )
}
export default AppWrapper
