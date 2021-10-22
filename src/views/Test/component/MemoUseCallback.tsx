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
      <input value={value} placeholder="Child" onChange={(e) => onChange(e.target.value)} />
    </>
  )
}

const MemoChild = memo(Child)

const Compo = () => {
  const [a, setA] = useState('')
  const [b, setB] = useState('')

  const onChangeMemoChild = useCallback((e) => setB(e), [setB])

  return (
    <fieldset className="w-240px">
      <legend>MemoUseCallback</legend>

      <div className="flex flex-col">
        <h2>Compo: {a}</h2>
        <input placeholder="Compo" value={a} onChange={(e) => setA(e.target.value)} />

        <MemoChild value={b} onChange={onChangeMemoChild} />
      </div>
    </fieldset>
  )
}

export default Compo
