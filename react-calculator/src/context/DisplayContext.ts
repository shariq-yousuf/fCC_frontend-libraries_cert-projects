import { createContext, Dispatch, SetStateAction } from "react"

interface Types {
  setDisplayValue: Dispatch<SetStateAction<string>>
  doMath: () => void
  isOperator: (val: string) => boolean
}

const DisplayContext = createContext<Types | null>(null)

export default DisplayContext
