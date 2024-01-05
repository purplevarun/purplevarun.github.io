import { ReactNode } from 'react'
import { TRANSITION } from '../../constants/Constants.ts'
import useDarkMode from '../../context/DarkMode/DarkModeHook.tsx'
import { BLACK_COLOR, WHITE_COLOR } from '../../constants/Colors.ts'

const AppWrapper = ({ children }: { children: ReactNode }) => {
    const { darkMode } = useDarkMode()
    return (
        <div
            style={{
                transition: TRANSITION,
                background: darkMode ? BLACK_COLOR : WHITE_COLOR,
                color: darkMode ? WHITE_COLOR : BLACK_COLOR,
                minHeight: '100vh',
            }}
        >
            {children}
        </div>
    )
}
export default AppWrapper
