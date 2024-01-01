import { ReactNode } from 'react'
import useDarkMode from '../DarkMode/DarkModeHook.tsx'
import { appStyle } from './App.style.ts'
import { AnimatePresence } from 'framer-motion'

const AppWrapper = ({ children }: { children: ReactNode }) => {
    const { darkMode } = useDarkMode()
    return (
        <div style={appStyle(darkMode)}>
            <AnimatePresence>{children}</AnimatePresence>
        </div>
    )
}
export default AppWrapper
