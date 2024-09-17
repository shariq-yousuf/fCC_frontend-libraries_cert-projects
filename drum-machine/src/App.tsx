import Display from "./components/Display"
import Drum from "./components/Drum"

function App() {
  return (
    <main className="flex justify-center items-center h-dvh bg-red-300">
      <div id="drum-machine" className="h-2/3 w-1/2 p-4 bg-indigo-200">
        <Display />
        <Drum/>
      </div>
    </main>
  )
}

export default App
