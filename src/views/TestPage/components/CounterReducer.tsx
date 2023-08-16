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

const CounterReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <fieldset className="w-300px px-4 py-2 border-4 rounded-md border-red-400 flex flex-col items-center justify-evenly">
      <legend className="px-2 font-bold">CounterReducer(useReducer)</legend>

      <div>Count: {state.count}</div>

      <button
        className="text-20px font-bold bg-red-400 hover:bg-red-300 text-white flex-shrink-0 px-8 py-2 rounded-md text-sm"
        onClick={() => dispatch({ type: 'increment' })}
      >
        +
      </button>

      <button
        className="text-20px font-bold bg-red-400 hover:bg-red-300 text-white flex-shrink-0 px-8 py-2 rounded-md text-sm "
        onClick={() => dispatch({ type: 'decrement' })}
      >
        -
      </button>
    </fieldset>
  )
}

export default CounterReducer
