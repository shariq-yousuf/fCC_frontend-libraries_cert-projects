import { useState } from "react"
import Editor from "./components/Editor"
import Preview from "./components/Preview"

function App() {
  const [inputValue, setInputValue] = useState<string>("")
  const [markedValue, setMarkedValue] = useState("")

  return (
    <div className="app">
      <h1 className="app-title">Markdown Previewer</h1>
      <main>
        <div>
          <h2 className="app-subtitle">Editor</h2>
          <Editor
            inputValue={inputValue}
            setInputValue={setInputValue}
            setMarkedValue={setMarkedValue}
          />
        </div>

        <div>
          <h2 className="app-subtitle">Preview</h2>
          <Preview markedValue={markedValue} />
        </div>
      </main>
    </div>
  )
}

export default App
