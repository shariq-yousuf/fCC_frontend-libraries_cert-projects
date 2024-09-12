import React, { useEffect, useState } from "react"
import QuoteBox from "./components/QuoteBox"

function App() {
  const [hadith, setHadith] = useState({})

  useEffect(() => {
    getHadithFromAPI()
  }, [])

  const getHadithFromAPI = () => {
    const randomNumber = Math.ceil(Math.random() * 4000)
    const URL = `https://www.hadithapi.com/public/api/hadiths?apiKey=$2y$10$Oq25553u9h455mMqwpWfZeaIDxbwrs4TelrZHfurQpp8VVJBVep6&paginate=1&page=${randomNumber}`

    fetch(URL)
      .then((response) => response.json())
      .then((data) => setHadith(data.hadiths.data[0]))
      .catch((error) => console.error(error))
  }

  return (
    <div className="flex justify-center items-center p-8 min-h-dvh bg-red-500">
      <QuoteBox hadith={hadith} getHadithFromAPI={getHadithFromAPI} />
    </div>
  )
}

export default App
