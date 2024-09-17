import Pad from "./Pad"

const Drum = () => {
  const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"]
  
  return (
    <div className="w-full flex flex-wrap justify-center mt-6 gap-2">
      {keys.map((key) => (
        <Pad key={key} drumKey={key} />
      ))}
    </div>
  )
}

export default Drum
