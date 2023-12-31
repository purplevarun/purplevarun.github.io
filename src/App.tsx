import useLoader from './Loader/LoaderHook.tsx'
import LoaderScreen from './Loader/LoaderScreen.tsx'

const App = () => {
    const loaded = useLoader()

    if (loaded) {
        return <h1>Hello world</h1>
    } else {
        return <LoaderScreen />
    }
}
export default App
