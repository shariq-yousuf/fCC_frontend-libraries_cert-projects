import { createContext, Dispatch } from "react"
import { LengthType } from "../App"

interface LengthsContextType {
  lengths: LengthType[]
  setLengths: Dispatch<React.SetStateAction<LengthType[]>>
}

export const initialState: LengthType[] = [
  {
    title: "break",
    value: 5,
  },
  {
    title: "session",
    value: 25,
  },
]

const LengthsContext = createContext<LengthsContextType>({
  lengths: initialState,
  setLengths: () => {},
})

export default LengthsContext
