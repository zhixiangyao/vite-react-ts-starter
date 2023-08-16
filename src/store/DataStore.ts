import { createMiniReduxStore, useMiniReduxStore } from '/@/utils/mini-redux'

type State = { data: number }
type Action = { type: 'ADD' } | { type: 'PLUS'; value: number }

const store = createMiniReduxStore<Action, State>(
  (state, action) => {
    switch (action.type) {
      case 'ADD':
        return { data: state.data + 1 }

      case 'PLUS':
        return { data: state.data * action.value }

      default:
        return state
    }
  },
  { data: 0 },
)

const useDataStore = () => {
  return useMiniReduxStore(store)
}

const useDataDispatch = () => {
  return store.dispatch
}

export { useDataStore, useDataDispatch }
