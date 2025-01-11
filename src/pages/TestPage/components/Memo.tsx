import { useMemo, useState } from 'react'

function computeExpensiveValue(a: number, b: number, c: number) {
  return a * b + c
}

export const Memo: React.FC = () => {
  const [a, setA] = useState(1)
  const [b, setB] = useState(0)
  const [c, setC] = useState(0)
  const sum = useMemo(() => computeExpensiveValue(a, b, c), [a, b, c])

  return (
    <fieldset className="w-300px flex flex-col items-center justify-evenly rounded-md border-4 border-red-400 px-4 py-2">
      <legend className="px-2 font-bold">Memo</legend>

      <div className="my-2 rounded-md bg-red-100 px-2 font-bold">
        a * b + c =
        {sum}
      </div>

      <div className="flex w-full justify-evenly">
        <div className="flex flex-col items-center">
          <div>
            a:
            {a}
          </div>
          <button
            type="button"
            className="text-20px flex-shrink-0 rounded-md bg-red-400 px-2 py-2 text-sm font-bold text-white hover:bg-red-300"
            onClick={() => setA(e => e + 1)}
          >
            a + 1
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div>
            b:
            {b}
          </div>
          <button
            type="button"
            className="text-20px flex-shrink-0 rounded-md bg-red-400 px-2 py-2 text-sm font-bold text-white hover:bg-red-300"
            onClick={() => setB(e => e + 1)}
          >
            b + 1
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div>
            c:
            {c}
          </div>
          <button
            type="button"
            className="text-20px flex-shrink-0 rounded-md bg-red-400 px-2 py-2 text-sm font-medium text-white hover:bg-red-300"
            onClick={() => setC(e => e + 1)}
          >
            c + 1
          </button>
        </div>
      </div>
    </fieldset>
  )
}
