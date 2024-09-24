import { useContext } from "react"
import { ButtonType } from "../App"
import DisplayContext from "../context/DisplayContext"

const Button = ({ button: { value, type } }: { button: ButtonType }) => {
  const context = useContext(DisplayContext)

  return (
    <div
      id={type}
      className={`bg-slate-200 text-black min-h-16 border-2 border-white hover:border-none active:scale-[0.98] flex justify-center items-center text-4xl cursor-pointer`}
      style={{ gridArea: type }}
      onClick={() => context!.createNewDisplayValue(value)}
    >
      {value}
    </div>
  )
}

export default Button
