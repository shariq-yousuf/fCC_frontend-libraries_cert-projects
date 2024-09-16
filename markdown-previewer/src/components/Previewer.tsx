const Previewer = ({ markedValue }: { markedValue: string }) => {
  return (
    <div
      id="preview"
      className="w-[45%] h-[80dvh] border-2 border-black text-black text-lg p-2 
                  overflow-auto bg-white"
      dangerouslySetInnerHTML={{ __html: markedValue }}
    ></div>
  )
}

export default Previewer
