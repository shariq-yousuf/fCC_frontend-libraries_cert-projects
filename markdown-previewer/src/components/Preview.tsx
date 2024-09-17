const Preview = ({
  markedValue,
}: {
  markedValue: string | Promise<string>
}) => {
  return (
    <div id="preview" dangerouslySetInnerHTML={{ __html: markedValue }}></div>
  )
}

export default Preview
