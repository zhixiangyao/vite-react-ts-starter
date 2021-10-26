import React, { useState, memo, useCallback } from 'react'

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
        className="px-2 my-2"
        value={value}
        placeholder="Child"
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  )
}

const MemoChild = memo(Child)

const Compo = () => {
  const [a, setA] = useState('')
  const [b, setB] = useState('')

  const onChangeMemoChild = useCallback((e) => setB(e), [setB])

  return (
    <fieldset className="w-300px px-4 py-2 border-4 rounded-md border-blue-400">
      <legend className="px-2 font-bold">MemoUseCallback</legend>

      <div className="flex flex-col">
        <h2>Compo: {a}</h2>
        <input
          className="px-2 my-2"
          placeholder="Compo"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />

        <MemoChild value={b} onChange={onChangeMemoChild} />
      </div>
    </fieldset>
  )
}

export default Compo
