import { useContext } from 'react'
import RouterContext from './RouterContext.tsx'

const useRouter = () => {
    return useContext(RouterContext)
}
export default useRouter
