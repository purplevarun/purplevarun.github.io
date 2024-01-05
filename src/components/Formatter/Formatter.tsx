import { DOUBLE_UNDERSCORE_REGEX } from '../../constants/Constants.ts'
import { EMPHASIS_COLOR } from '../../constants/Colors.ts'

const Formatter = ({ text }: { text: string }) => {
    const boldText = text.replace(
        DOUBLE_UNDERSCORE_REGEX,
        (_, bwText) =>
            `<b style="font-size: larger;color: ${EMPHASIS_COLOR}">${bwText}</b>`
    )
    return <span dangerouslySetInnerHTML={{ __html: boldText }} />
}
export default Formatter
