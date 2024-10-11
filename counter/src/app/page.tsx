"use client"

import { useState } from "react"

export default function Home() {
  const [count, setCount] = useState(4)

  function decrementCount() {
    setCount((prevCount) => prevCount - 1)
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="container flex text-black items-center justify-between w-full max-w-xs p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
        <button className="text-2xl font-bold" onClick={decrementCount}>
          -
        </button>
        <span className="text-xl">{count}</span>
        <button className="text-2xl  font-bold" onClick={incrementCount}>
          +
        </button>
      </div>
    </div>
  )
}
