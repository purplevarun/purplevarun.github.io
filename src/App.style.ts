const TRANSITION = '1.5s'
const BLACK = 'black'
const WHITE = 'white'
const appStyle = (darkMode: boolean) => ({
    transition: TRANSITION,
    background: darkMode ? BLACK : WHITE,
    color: darkMode ? WHITE : BLACK,
    minHeight: '100vh',
})
export { appStyle }
