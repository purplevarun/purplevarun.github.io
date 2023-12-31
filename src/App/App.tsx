import Home from '../Home/Home.tsx'
import LoaderScreen from '../Loader/LoaderScreen.tsx'
import useLoader from '../Loader/LoaderHook.tsx'
import Layout from './Layout.tsx'

const App = () => {
    const loaded = useLoader()
    return loaded ? (
        <Layout>
            <Home />
        </Layout>
    ) : (
        <LoaderScreen />
    )
}
export default App
