import { createContext } from 'react'
import RouterData from './RouterData.tsx'

const routerContext = createContext({} as ReturnType<typeof RouterData>)
export default routerContext
