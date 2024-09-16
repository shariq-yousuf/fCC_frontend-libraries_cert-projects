const Preview = ({ markedValue }: { markedValue: string }) => {
  return (
    <div id="preview" dangerouslySetInnerHTML={{ __html: markedValue }}></div>
  )
}

export default Preview
