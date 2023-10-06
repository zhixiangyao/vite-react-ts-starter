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
        className="focus:border-light-blue-500 focus:ring-light-blue-500 w-full rounded-md border border-gray-200 py-2 pl-2 text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-1"
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
    <fieldset className="w-300px flex flex-col items-center justify-evenly rounded-md border-4 border-blue-400 px-4 py-2">
      <legend className="px-2 font-bold">MemoUseCallback</legend>

      <h2>Compo: {a}</h2>
      <input
        className="focus:border-light-blue-500 focus:ring-light-blue-500 w-full rounded-md border border-gray-200 py-2 pl-2 text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-1"
        placeholder="Compo"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />

      <MemoChild value={b} onChange={onChangeMemoChild} />
    </fieldset>
  )
}

export default MemoUseCallback
