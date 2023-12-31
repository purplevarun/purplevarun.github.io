import { createContext } from 'react'
import DarkModeData from './DarkModeData.tsx'

const DarkModeContext = createContext({} as ReturnType<typeof DarkModeData>)
export default DarkModeContext
