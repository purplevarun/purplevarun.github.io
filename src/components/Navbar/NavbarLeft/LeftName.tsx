import data from '../../../data/Data.ts'
import LeftNameWrapper from './LeftName.wrapper.tsx'

const LeftName = () => {
    return <LeftNameWrapper>{data.name}</LeftNameWrapper>
}
export default LeftName
