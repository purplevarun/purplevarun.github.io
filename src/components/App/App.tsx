import Home from '../Home/Home.tsx'
import LoaderScreen from '../Loader/LoaderScreen.tsx'
import useLoader from '../Loader/LoaderHook.tsx'
import AppWrapper from './App.wrapper.tsx'

const App = () => {
    const loaded = useLoader()
    return loaded ? (
        <AppWrapper>
            <Home />
        </AppWrapper>
    ) : (
        <LoaderScreen />
    )
}
export default App
