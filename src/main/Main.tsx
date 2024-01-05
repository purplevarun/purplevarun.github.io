import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../components/App/App.tsx'
import './Main.sass'
import DarkModeProvider from '../context/DarkMode/DarkModeProvider.tsx'
import RouterProvider from '../context/Router/RouterProvider.tsx'
import { AnimatePresence } from 'framer-motion'
import MenuProvider from '../context/Menu/MenuProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AnimatePresence>
            <DarkModeProvider>
                <MenuProvider>
                    <RouterProvider>
                        <App />
                    </RouterProvider>
                </MenuProvider>
            </DarkModeProvider>
        </AnimatePresence>
    </React.StrictMode>
)
