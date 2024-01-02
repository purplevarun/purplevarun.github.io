import { createContext } from 'react'
import MenuData from './MenuData.tsx'

const MenuContext = createContext({} as ReturnType<typeof MenuData>)
export default MenuContext
