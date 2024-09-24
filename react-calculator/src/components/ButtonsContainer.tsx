import { ButtonType } from "../App"
import Button from "./Button"

const ButtonsContainer = ({ buttonsData }: { buttonsData: ButtonType[] }) => {
  return (
    <div
      id="buttons-container"
      className="grid grid-cols-4 gap-4"
      style={{
        gridTemplateAreas: `
        "clear clear divide multiply"
        "seven eight nine subtract"
        "four five six add"
        "one two three equals"
        "zero zero decimal equals"`,
      }}
    >
      {buttonsData.map((button) => (
        <Button key={button.id} button={button} />
      ))}
    </div>
  )
}

export default ButtonsContainer
