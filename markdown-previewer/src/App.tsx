import { useState } from "react"
import Editor from "./components/Editor"
import Preview from "./components/Preview"

function App() {
  const initialInputState = `
# Welcome to my React Markdown Previewer!
## This is a sub-heading...

There's also [links](https://shariq-dev.netlify.app),

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

> Block Quotes!

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSTja7ORhL0RWVPZf2mjDVVkmjyeVvnDRpBQ&s)
`
  const [inputValue, setInputValue] = useState<string>(initialInputState)
  const [markedValue, setMarkedValue] = useState<string | Promise<string>>("")

  return (
    <div className="app">
      <h1 className="app-title">Markdown Previewer</h1>
      <main>
        <div className="container">
          <h2 className="app-subtitle">Editor</h2>
          <Editor
            inputValue={inputValue}
            setInputValue={setInputValue}
            setMarkedValue={setMarkedValue}
          />
        </div>

        <div className="container">
          <h2 className="app-subtitle">Preview</h2>
          <Preview markedValue={markedValue} />
        </div>
      </main>
    </div>
  )
}

export default App
