import { useReducer } from 'react'

type Action = { type: 'decrement' | 'increment' }
type State = { count: number }

const initialState: State = { count: 0 }
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

export const CounterReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <fieldset className="w-300px flex flex-col items-center justify-evenly rounded-md border-4 border-red-400 px-4 py-2">
      <legend className="px-2 font-bold">CounterReducer(useReducer)</legend>

      <div>Count: {state.count}</div>

      <button
        className="text-20px flex-shrink-0 rounded-md bg-red-400 px-8 py-2 text-sm font-bold text-white hover:bg-red-300"
        onClick={() => dispatch({ type: 'increment' })}
      >
        +
      </button>

      <button
        className="text-20px flex-shrink-0 rounded-md bg-red-400 px-8 py-2 text-sm font-bold text-white hover:bg-red-300 "
        onClick={() => dispatch({ type: 'decrement' })}
      >
        -
      </button>
    </fieldset>
  )
}
