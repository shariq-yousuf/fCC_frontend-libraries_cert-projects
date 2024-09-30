import { createContext, Dispatch } from "react"
import { LengthType } from "../App"

interface LengthsContextType {
  lengths: LengthType
  setLengths: Dispatch<React.SetStateAction<LengthType>>
}

const LengthsContext = createContext<LengthsContextType>({
  lengths: {
    sessionLength: 0,
    breakLength: 0,
  },
  setLengths: () => {},
})

export default LengthsContext
