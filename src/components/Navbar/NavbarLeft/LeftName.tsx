import data from '../../../data/Data.ts'
import LeftNameWrapper from './LeftName.wrapper.tsx'

const LeftName = () => {
    return (
        <LeftNameWrapper>
            {data.name.first} {data.name.last}
        </LeftNameWrapper>
    )
}
export default LeftName
