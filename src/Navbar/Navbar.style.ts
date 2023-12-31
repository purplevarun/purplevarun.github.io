import { BLACK, WHITE } from '../constants/Constants.ts'

const navbarStyle = (darkMode: boolean) => ({
    borderBottomColor: darkMode ? WHITE : BLACK,
})
export { navbarStyle }
