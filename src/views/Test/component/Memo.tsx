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
    <fieldset className="w-240px p-4 border-4 border-red-400">
      <legend>Memo</legend>

      <div className="flex flex-col">
        <div>a: {a}</div>
        <button
          className="w-100px bg-red-400 hover:bg-red-300 text-white flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium"
          onClick={() => setA((e) => e + 1)}
        >
          a + 1
        </button>

        <div>b: {b}</div>
        <button
          className="w-100px bg-red-400 hover:bg-red-300 text-white flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium"
          onClick={() => setB((e) => e + 1)}
        >
          b + 1
        </button>

        <br />

        <div>c: {c}</div>
        <button
          className="w-100px bg-red-400 hover:bg-red-300 text-white flex-shrink-0 px-3 py-2 rounded-md text-sm font-medium"
          onClick={() => setC((e) => e + 1)}
        >
          c + 1
        </button>

        <br />

        <div>useMemo test: {useMemo(() => computeExpensiveValue(a, b), [a, b])}</div>
      </div>
    </fieldset>
  )
}

export default Memo
