import React, { useEffect, useRef, useState } from "react"
import QuoteBox from "./components/QuoteBox"
import tailwindColors from "tailwindcss/colors"

function App() {
  const [hadith, setHadith] = useState({})
  const [bgColor, setBgColor] = useState(tailwindColors["pink"][500])
  const textEl = useRef()

  useEffect(() => {
    getHadithFromAPI()
  }, [])

  const getHadithFromAPI = () => {
    if (textEl.current) textEl.current.style.opacity = "0"

    const randomNumber = getRandomNumber("ceil", 4000)
    const URL = `https://www.hadithapi.com/public/api/hadiths?apiKey=$2y$10$Oq25553u9h455mMqwpWfZeaIDxbwrs4TelrZHfurQpp8VVJBVep6&paginate=1&page=${randomNumber}`

    fetch(URL)
      .then((response) => response.json())
      .then((data) => setHadith(data.hadiths.data[0]))
      .catch((error) =>
        setHadith({ error: "Something went wrong, please try again!" })
      )
  }

  const getBgColor = () => {
    const bgColorsName = [
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
    ]

    const r = getRandomNumber("floor", bgColorsName.length)
    setBgColor(
      tailwindColors[bgColorsName[r]][getRandomNumber("ceil", 8) * 100]
    )
  }

  function getRandomNumber(type, length) {
    return Math[type](Math.random() * length)
  }

  return (
    <div
      className={`flex justify-center items-center p-8 min-h-dvh transition-all	duration-1000`}
      style={{ backgroundColor: bgColor }}
    >
      <QuoteBox
        hadith={hadith}
        getHadithFromAPI={getHadithFromAPI}
        bgColor={bgColor}
        getBgColor={getBgColor}
        textEl={textEl}
      />
    </div>
  )
}

export default App
