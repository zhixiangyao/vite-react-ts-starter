import React, { useReducer } from 'react'

const initialState = { count: 0 }

const reducer = (state: { count: number }, action: { type: 'decrement' | 'increment' }) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <fieldset className="w-240px p-4 border-4 border-red-400">
      <legend>CounterReducer(useReducer)</legend>

      <div>Count: {state.count}</div>
      <div className="flex w-52">
        <button
          className="w-1/2 flex items-center justify-center bg-lime-300 text-black border border-black shadow-offset-black"
          onClick={() => dispatch({ type: 'decrement' })}
        >
          -
        </button>

        <button
          className="w-1/2 flex items-center justify-center border border-black shadow-offset-black"
          onClick={() => dispatch({ type: 'increment' })}
        >
          +
        </button>
      </div>
    </fieldset>
  )
}

export default CounterReducer
