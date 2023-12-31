import { ReactNode } from 'react'
import useDarkMode from './DarkMode/DarkModeHook.tsx'
import { appStyle } from './App.style.ts'

const Layout = ({ children }: { children: ReactNode }) => {
    const { darkMode } = useDarkMode()
    return <div style={appStyle(darkMode)}>{children}</div>
}
export default Layout
