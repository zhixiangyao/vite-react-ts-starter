import { useCallback, useEffect, useState } from 'react'

const EffectTest: React.FC = () => {
  const [inputValue1, setInputValue1] = useState('')
  const [inputValue2, setInputValue2] = useState('')
  const inputValue1Cb = useCallback(() => {
    console.log(inputValue1)
  }, [inputValue1])

  useEffect(() => {
    console.log('inputValue1:', inputValue1)
    inputValue1Cb()
    console.log('inputValue2:', inputValue2)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue2])

  return (
    <fieldset className="w-300px px-4 py-2 border-4 rounded-md border-red-400 flex flex-col items-center justify-evenly">
      <legend className="px-2 font-bold">EffectTest</legend>

      <div>inputValue1: {inputValue1}</div>

      <input
        value={inputValue1}
        className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2"
        onChange={(e) => {
          setInputValue1(e.target.value)
        }}
      />

      <div>inputValue2: {inputValue2}</div>

      <input
        value={inputValue2}
        className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2"
        onChange={(e) => {
          setInputValue2(e.target.value)
        }}
      />
    </fieldset>
  )
}

export default EffectTest
