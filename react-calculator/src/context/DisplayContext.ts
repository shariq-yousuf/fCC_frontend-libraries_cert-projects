import { createContext, Dispatch, SetStateAction } from "react"

interface Types {
  setDisplayValue: Dispatch<SetStateAction<string>>
  doMath: () => void
}

const DisplayContext = createContext<Types | null>(null)

export default DisplayContext
