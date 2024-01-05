import Navbar from '../Navbar/Navbar/Navbar.tsx'
import Routes from './Routes.tsx'
import useMenu from '../../context/Menu/MenuHook.tsx'

const Home = () => {
    const BlackScreen = () => (
        <div
            style={{
                width: '100%',
                height: '500vh',
                position: 'absolute',
                background: 'black',
                opacity: '0.8',
                zIndex: '2',
            }}
        />
    )
    const { menuOpen } = useMenu()
    return (
        <div>
            <Navbar />
            {menuOpen && <BlackScreen />}
            <Routes />
        </div>
    )
}
export default Home
