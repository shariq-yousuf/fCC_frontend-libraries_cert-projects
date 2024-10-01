import { createContext } from "react"

interface GlobalContextType {
  isTimerRunning: boolean
  setIsTimerRunning: React.Dispatch<React.SetStateAction<boolean>>
  isBreak: boolean
  setIsBreak: React.Dispatch<React.SetStateAction<boolean>>
  audioEl: React.RefObject<HTMLAudioElement>
}

const GlobalContext = createContext<GlobalContextType>({
  isTimerRunning: false,
  setIsTimerRunning: () => {},
  isBreak: false,
  setIsBreak: () => {},
  audioEl: {
    current: null,
  },
})

export default GlobalContext
