import data from '../../../data/Data.ts'
import { motion, useAnimate } from 'framer-motion'
import { NAME_DELAY } from '../../../constants/Constants.ts'
import { useEffect } from 'react'

const LeftName = () => {
    const firstName = data.name.first
    const lastName = data.name.last
    const [scope, animate] = useAnimate()
    useEffect(() => {
        animate(
            scope.current,
            { rotate: 720 },
            { delay: 3, repeat: 0, duration: 1, repeatDelay: 0 }
        )
    }, [animate, scope])
    return (
        <h1 style={{ display: 'flex', gap: '20px' }}>
            <motion.p
                initial={{ x: -200 }}
                animate={{ x: 10 }}
                transition={{ delay: NAME_DELAY + 1 }}
            >
                {firstName}
            </motion.p>
            <motion.p initial={{ rotate: 0 }} ref={scope}>
                {lastName}
            </motion.p>
        </h1>
    )
}
export default LeftName
