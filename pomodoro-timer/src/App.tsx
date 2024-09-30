import { useState } from "react"
import Break from "./components/Break"
import Session from "./components/Session"
import SessionContext from "./context/LengthsContext"
import Timer from "./components/Timer"

export interface LengthType {
  sessionLength: number
  breakLength: number
}

function App() {
  const [lengths, setLengths] = useState<LengthType>({
    sessionLength: 25,
    breakLength: 5,
  })

  return (
    <SessionContext.Provider value={{ lengths, setLengths }}>
      <main className="flex items-center justify-center h-dvh bg-slate-400 p-4">
        <div id="container" className="w-dvw md:w-1/2 bg-white p-4">
          <h1 className="text-4xl font-bold text-center m-4">Pomodoro Timer</h1>
          <div id="lengths-container" className="flex justify-around gap-4">
            <Break />
            <Session />
          </div>
          <Timer />
        </div>
      </main>
    </SessionContext.Provider>
  )
}

export default App
