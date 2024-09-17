import { useState } from "react"
import Display from "./components/Display"
import Drum from "./components/Drum"
import MsgContext from "./context/Context"

export interface AudioClip {
  id: number
  key: string
  src: string
  displayMsg: string
}

function App() {
  const audioClips: AudioClip[] = [
    {
      id: 1,
      key: "Q",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
      displayMsg: "Ok you heard it!",
    },
    {
      id: 2,
      key: "W",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
      displayMsg: "That's it",
    },
    {
      id: 3,
      key: "E",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
      displayMsg: "Yes All the same",
    },
    {
      id: 4,
      key: "A",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
      displayMsg: "Hmmm",
    },
    {
      id: 5,
      key: "S",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
      displayMsg: "Nothing new here",
    },
    {
      id: 6,
      key: "D",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
      displayMsg: "Its not a drum you are looking for",
    },
    {
      id: 7,
      key: "Z",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
      displayMsg: "Just passing tests",
    },
    {
      id: 8,
      key: "X",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
      displayMsg: "You are stil playing?",
    },
    {
      id: 9,
      key: "C",
      src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
      displayMsg: "404 Page not found",
    },
  ]
  const [displayMsg, setDisplayMsg] = useState("")

  const showMsg = (msg: string) => {
    setDisplayMsg(msg)

    setTimeout(() => {
      setDisplayMsg("")
    }, 700)
  }

  return (
    <MsgContext.Provider value={showMsg}>
      <main className="flex justify-center items-center h-dvh bg-red-300">
        <div id="drum-machine" className="min-h-2/3 w-1/2 p-4 bg-indigo-200">
          <Display displayMsg={displayMsg} />
          <Drum audioClips={audioClips} />
        </div>
      </main>
    </MsgContext.Provider>
  )
}

export default App
