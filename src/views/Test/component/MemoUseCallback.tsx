import React, { useState, memo, useCallback } from 'react'

interface ChildProps {
  value: string
  onChange: (val: string) => void
}

const Child = (props: ChildProps) => {
  const { value, onChange } = props
  console.log('child fc running')
  return <input value={value} placeholder="Child" onChange={(e) => onChange(e.target.value)} />
}

const MemoChild = memo(Child)

const Compo = () => {
  const [a, setA] = useState('')
  const [b, setB] = useState('')

  const onChangeMemoChild = useCallback(
    (e) => {
      setB(e)
    },
    [setB],
  )

  return (
    <fieldset>
      <legend>MemoUseCallback</legend>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <input placeholder="Compo" value={a} onChange={(e) => setA(e.target.value)} />

        <MemoChild value={b} onChange={onChangeMemoChild} />
      </div>
    </fieldset>
  )
}

export default Compo
