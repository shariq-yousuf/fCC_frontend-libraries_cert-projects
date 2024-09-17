const Pad = ({ drumKey }: { drumKey: string }) => {
  return (
    <div className="drum-pad w-[30%] h-20 flex justify-center items-center bg-indigo-300 cursor-pointer text-3xl">
      {drumKey}
    </div>
  )
}

export default Pad
