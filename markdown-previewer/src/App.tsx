import Editor from "./components/Editor"
import Previewer from "./components/Previewer"

function App() {
  return (
    <div className="flex flex-col justify-evenly h-dvh">
      <h1 className="text-5xl font-bold text-center">Markdown Previewer</h1>
      <main className="flex justify-center gap-8">
        <Editor />
        <Previewer />
      </main>
    </div>
  )
}

export default App
