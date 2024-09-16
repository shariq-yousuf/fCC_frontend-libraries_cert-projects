import { useState } from "react"
import Editor from "./components/Editor"
import Previewer from "./components/Previewer"

function App() {
  const [inputValue, setInputValue] = useState<string>("")
  const [markedValue, setMarkedValue] = useState("")

  return (
    <div className="flex flex-col justify-evenly h-dvh">
      <h1 className="text-5xl font-bold text-center">Markdown Previewer</h1>
      <main className="flex justify-center gap-8">
        <Editor
          inputValue={inputValue}
          setInputValue={setInputValue}
          setMarkedValue={setMarkedValue}
        />
        <Previewer markedValue={markedValue} />
      </main>
    </div>
  )
}

export default App
