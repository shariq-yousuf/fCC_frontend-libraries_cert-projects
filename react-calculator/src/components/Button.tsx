import { ButtonType } from "../App"

const Button = ({ button: { value, type } }: { button: ButtonType }) => {
  return (
    <div
      id={type}
      className={`bg-slate-200 text-black min-h-16 flex justify-center items-center text-4xl cursor-pointer`}
      style={{ gridArea: type }}
    >
      {value}
    </div>
  )
}

export default Button
