import { useRef, useState } from "react"
import SessionContext, { initialState } from "./context/LengthsContext"
import Timer from "./components/Timer"
import Length from "./components/Length"
import GlobalContext from "./context/GlobalContext"
import Audio from "./components/Audio"

export interface LengthType {
  title: string
  value: number
}

function App() {
  const [lengths, setLengths] = useState<LengthType[]>(initialState)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [isBreak, setIsBreak] = useState(false)
  const audioEl = useRef<HTMLAudioElement>(null)

  return (
    <GlobalContext.Provider
      value={{
        isTimerRunning,
        setIsTimerRunning,
        isBreak,
        setIsBreak,
        audioEl,
      }}
    >
      <SessionContext.Provider value={{ lengths, setLengths }}>
        <main className="flex items-center justify-center h-dvh bg-amber-300 p-4">
          <div id="container" className="w-dvw md:w-1/2 rounded bg-white p-4">
            <h1 className="text-4xl text-amber-400 font-bold text-center m-4">
              Pomodoro Timer
            </h1>
            <div id="lengths-container" className="flex justify-around gap-4">
              {lengths.map(({ title, value }) => (
                <Length key={title} length={value} title={title} />
              ))}
            </div>
            <Timer />
            <Audio />
          </div>
        </main>
      </SessionContext.Provider>
    </GlobalContext.Provider>
  )
}

export default App
