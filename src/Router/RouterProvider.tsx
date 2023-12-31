import { ReactNode } from 'react'
import RouterContext from './RouterContext.tsx'
import RouterData from './RouterData.tsx'

const RouterProvider = ({ children }: { children: ReactNode }) => {
    return (
        <RouterContext.Provider value={RouterData()}>
            {children}
        </RouterContext.Provider>
    )
}
export default RouterProvider
