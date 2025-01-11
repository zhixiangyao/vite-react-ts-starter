import { useSyncExternalStore } from 'react'

type Listener = () => void

interface CreateMiniReduxStore {
  <A extends { type: string | number | symbol }, S extends object>(
    reducer: (state: S, action: A) => S,
    initialState: S,
  ): {
    subscribe: (listener: Listener) => () => void
    getSnapshot: () => S
    dispatch: (action: A) => A
  }
}

const createMiniReduxStore: CreateMiniReduxStore = (reducer, initialState) => {
  let state = initialState
  const listeners = new Set<Listener>()

  const subscribe = (listener: Listener) => {
    listeners.add(listener)

    return () => {
      listeners.delete(listener)
    }
  }

  const getSnapshot = () => {
    return state
  }

  const dispatch = (action: Parameters<typeof reducer>[1]) => {
    state = { ...state, ...reducer(state, action) }

    listeners.forEach(l => l())

    return action
  }

  return {
    subscribe,
    getSnapshot,
    dispatch,
  }
}

function useMiniReduxStore<T extends ReturnType<CreateMiniReduxStore>>(store: T) {
  const state = useSyncExternalStore(store.subscribe, store.getSnapshot)

  return state as ReturnType<T['getSnapshot']>
}

export { createMiniReduxStore, useMiniReduxStore }
