import { useContext } from "react"
import LengthsContext from "../context/LengthsContext"

const useLengthsContext = () => {
  return useContext(LengthsContext)
}

export default useLengthsContext
