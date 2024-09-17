import { marked } from "marked"
import { ChangeEvent, useEffect } from "react"

interface Props {
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  setMarkedValue: React.Dispatch<React.SetStateAction<string | Promise<string>>>
}

const Editor = ({ inputValue, setInputValue, setMarkedValue }: Props) => {
  useEffect(() => {
    markValue(inputValue)
  }, [])

  const onInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value
    setInputValue(value)

    markValue(value)
  }

  const markValue = (value: string) => {
    setMarkedValue(marked.parse(value, { breaks: true }))
  }

  return <textarea id="editor" onChange={onInputChange} value={inputValue} />
}

export default Editor
