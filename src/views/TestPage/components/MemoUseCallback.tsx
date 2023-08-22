import { useState, memo, useCallback } from 'react'

interface ChildProps {
  value: string
  onChange: (val: string) => void
}

const Child = (props: ChildProps) => {
  const { value, onChange } = props
  console.log('child fc running')

  return (
    <>
      <h2>Child: {value}</h2>
      <input
        className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2"
        value={value}
        placeholder="Child"
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  )
}

const MemoChild = memo(Child)

const MemoUseCallback: React.FC = () => {
  const [a, setA] = useState('')
  const [b, setB] = useState('')

  const onChangeMemoChild = useCallback((e: string) => setB(e), [setB])

  return (
    <fieldset className="w-300px px-4 py-2 border-4 rounded-md border-blue-400 flex flex-col items-center justify-evenly">
      <legend className="px-2 font-bold">MemoUseCallback</legend>

      <h2>Compo: {a}</h2>
      <input
        className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2"
        placeholder="Compo"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />

      <MemoChild value={b} onChange={onChangeMemoChild} />
    </fieldset>
  )
}

export default MemoUseCallback
