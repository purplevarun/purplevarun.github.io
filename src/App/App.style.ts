import { BLACK, TRANSITION, WHITE } from '../constants/Constants.ts'

const appStyle = (darkMode: boolean) => ({
    transition: TRANSITION,
    background: darkMode ? BLACK : WHITE,
    color: darkMode ? WHITE : BLACK,
    minHeight: '100vh',
})
export { appStyle }
