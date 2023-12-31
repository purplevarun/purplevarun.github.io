import Home from './Home.tsx'
import LoaderScreen from './Loader/LoaderScreen.tsx'
import useLoader from './Loader/LoaderHook.tsx'
import Layout from './Layout.tsx'

const App = () => {
    const loaded = useLoader()

    if (loaded) {
        return (
            <Layout>
                <Home />
            </Layout>
        )
    } else {
        return <LoaderScreen />
    }
}
export default App
