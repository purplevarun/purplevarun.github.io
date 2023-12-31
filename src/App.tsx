import { useEffect, useState } from 'react'

const App = () => {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 1000)
    })

    if (loaded) {
        return <h1>Hello world</h1>
    } else {
        return <h1>Loading</h1>
    }
}
export default App
