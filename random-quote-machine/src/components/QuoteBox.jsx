import React from "react"

const QuoteBox = () => {
  return (
    <div
      id="quote-box"
      className="min-h-64 md:w-2/5 w-11/12 bg-gray-600 px-8 py-4 flex flex-col justify-evenly"
    >
      <div id="text" className="text-3xl">
        Life is not measured by the number of breaths we take, but by the
        moments that take our breath away.
      </div>
      <div id="author" className="text-right text-xl">
        - Sir Claus Moser
      </div>
      <div id="buttons-container" className="flex justify-between">
        <a
          href="twitter.com/intent/tweet"
          id="tweet-quote"
          className="text-lg bg-red-500 px-4 py-1 hover:bg-red-600"
        >
          tweet
        </a>
        <button
          id="new-quote"
          className="text-lg bg-red-500 px-4 py-1 hover:bg-red-600"
        >
          New Quote
        </button>
      </div>
    </div>
  )
}

export default QuoteBox
