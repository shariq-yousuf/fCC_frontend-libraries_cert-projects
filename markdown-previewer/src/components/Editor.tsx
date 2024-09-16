import { marked } from "marked"
import { ChangeEvent, useState } from "react"

interface Props {
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  setMarkedValue: React.Dispatch<React.SetStateAction<string>>
}

const Editor = ({ inputValue, setInputValue, setMarkedValue }: Props) => {
  const onInputChange = async (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value
    setInputValue(value)

    const markedValue = await marked.parse(value)
    setMarkedValue(markedValue)
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
