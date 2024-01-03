const Formatter = ({ text }: { text: string }) => {
    const boldText = text.replace(
        /__(.*?)__/g,
        (_, bwText) => `<b style="font-size: larger">${bwText}</b>`
    )
    return <span dangerouslySetInnerHTML={{ __html: boldText }} />
}
export default Formatter
