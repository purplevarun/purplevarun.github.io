import { useEffect, useState } from 'react'

const useLoader = () => {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 1000)
    })
    return loaded
}
export default useLoader
