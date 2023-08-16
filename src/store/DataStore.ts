import { createMiniReduxStore, useMiniReduxStore } from '/@/utils/mini-redux'

type State = { data: number }
type ActionType = 'ADD'

const store = createMiniReduxStore<State, ActionType>({ data: 0 }, (state, action) => {
  switch (action.type) {
    case 'ADD':
      return { data: state.data + 1 }
    default:
      return state
  }
})

const useDataStore = () => {
  return useMiniReduxStore(store)
}

const useDataDispatch = () => {
  return store.dispatch
}

export { useDataStore, useDataDispatch }
