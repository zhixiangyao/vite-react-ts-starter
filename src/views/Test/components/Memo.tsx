import React, { useState, useMemo } from 'react'

const computeExpensiveValue = (a: number, b: number) => {
  console.log('computeExpensiveValue')
  return a * b
}

const Memo = () => {
  const [a, setA] = useState(1)
  const [b, setB] = useState(0)
  const [c, setC] = useState(0)

  return (
    <fieldset className="w-300px px-4 py-2 border-4 rounded-md border-red-400 flex flex-col items-center justify-evenly">
      <legend className="px-2 font-bold">Memo</legend>

      <div className="font-bold my-2 bg-red-100 px-2 rounded-md">
        useMemo: a * b = {useMemo(() => computeExpensiveValue(a, b), [a, b])}
      </div>

      <div>a: {a}</div>
      <button
        className="text-20px font-bold bg-red-400 hover:bg-red-300 text-white flex-shrink-0 px-8 py-2 rounded-md text-sm font-medium"
        onClick={() => setA((e) => e + 1)}
      >
        a + 1
      </button>

      <div>b: {b}</div>
      <button
        className="text-20px font-bold bg-red-400 hover:bg-red-300 text-white flex-shrink-0 px-8 py-2 rounded-md text-sm font-medium"
        onClick={() => setB((e) => e + 1)}
      >
        b + 1
      </button>

      <div>c: {c}</div>
      <button
        className="text-20px font-bold bg-red-400 hover:bg-red-300 text-white flex-shrink-0 px-8 py-2 rounded-md text-sm font-medium"
        onClick={() => setC((e) => e + 1)}
      >
        c + 1
      </button>
    </fieldset>
  )
}

export default Memo
