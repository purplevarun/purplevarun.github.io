import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../components/App/App.tsx'
import './Main.sass'
import DarkModeProvider from '../context/DarkMode/DarkModeProvider.tsx'
import RouterProvider from '../context/Router/RouterProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <DarkModeProvider>
            <RouterProvider>
                <App />
            </RouterProvider>
        </DarkModeProvider>
    </React.StrictMode>
)
