import useDarkMode from '../DarkMode/DarkModeHook.tsx'

const Home = () => {
    const { toggleDarkMode } = useDarkMode()
    return (
        <div>
            <div onClick={toggleDarkMode}>Toggle dark mode</div>
            <h1>Hello world</h1>
        </div>
    )
}
export default Home
