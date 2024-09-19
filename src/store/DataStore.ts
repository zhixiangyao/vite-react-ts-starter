import { createMiniReduxStore, useMiniReduxStore } from '../utils/miniRedux'

type State = { data: number }

type Action = { type: 'Add' | 'Multiply'; value: number }

type Reducer = (state: State, action: Action) => State

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'Add':
      return { data: state.data + action.value }

    case 'Multiply':
      return { data: state.data * action.value }

    default:
      return state
  }
}

const initialState: State = { data: 0 }

const store = createMiniReduxStore<Action, State>(reducer, initialState)

const useDataStore = () => {
  return [useMiniReduxStore(store), store.dispatch] as const
}

export { useDataStore }
