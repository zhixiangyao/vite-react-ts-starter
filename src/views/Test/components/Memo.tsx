import { useState, useMemo } from 'react'

const computeExpensiveValue = (a: number, b: number, c: number) => {
  return a * b + c
}

const Memo: React.FC = () => {
  const [a, setA] = useState(1)
  const [b, setB] = useState(0)
  const [c, setC] = useState(0)
  const sum = useMemo(() => computeExpensiveValue(a, b, c), [a, b, c])

  return (
    <fieldset className="w-300px px-4 py-2 border-4 rounded-md border-red-400 flex flex-col items-center justify-evenly">
      <legend className="px-2 font-bold">Memo</legend>

      <div className="font-bold my-2 bg-red-100 px-2 rounded-md">a * b + c = {sum}</div>

      <div className="w-full flex justify-evenly">
        <div className="flex flex-col items-center">
          <div>a: {a}</div>
          <button
            className="text-20px font-bold bg-red-400 hover:bg-red-300 text-white flex-shrink-0 px-2 py-2 rounded-md text-sm font-medium"
            onClick={() => setA((e) => e + 1)}
          >
            a + 1
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div>b: {b}</div>
          <button
            className="text-20px font-bold bg-red-400 hover:bg-red-300 text-white flex-shrink-0 px-2 py-2 rounded-md text-sm font-medium"
            onClick={() => setB((e) => e + 1)}
          >
            b + 1
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div>c: {c}</div>
          <button
            className="text-20px font-bold bg-red-400 hover:bg-red-300 text-white flex-shrink-0 px-2 py-2 rounded-md text-sm font-medium"
            onClick={() => setC((e) => e + 1)}
          >
            c + 1
          </button>
        </div>
      </div>
    </fieldset>
  )
}

export default Memo
