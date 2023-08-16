import { useSyncExternalStore } from 'react'

type Listener = () => void

const createMiniReduxStore = <State extends object, ActionType extends string>(
  initialState: State,
  reducer: (state: State, action: { type: ActionType }) => State,
) => {
  let state = initialState
  const listeners = new Set<Listener>()

  return {
    subscribe(listener: Listener) {
      listeners.add(listener)

      return () => {
        listeners.delete(listener)
      }
    },
    getSnapshot() {
      return state
    },
    dispatch(action: { type: ActionType }) {
      state = reducer(state, action)

      listeners.forEach((l) => l())

      return action
    },
  }
}

const useMiniReduxStore = <T extends ReturnType<typeof createMiniReduxStore>>(store: T) => {
  const state = useSyncExternalStore(store.subscribe, () => store.getSnapshot())

  return state as ReturnType<T['getSnapshot']>
}

export { createMiniReduxStore, useMiniReduxStore }
