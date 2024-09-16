import { ChangeEvent, useState } from "react"

const Editor = () => {
  const [inputValue, setInputValue] = useState("")

  const onInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <textarea
      id="editor"
      onChange={onInputChange}
      value={inputValue}
      className="w-[45%] h-[80dvh] resize-none border-2 border-black text-black text-lg p-2 
                  overflow-auto"
    />
  )
}

export default Editor
