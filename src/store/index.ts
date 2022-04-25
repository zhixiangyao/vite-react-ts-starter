import { createContext } from 'react'

import { CounterStore } from './CounterStore'

const stores = Object.freeze({
  counterStore: new CounterStore(),
})

const storesContext = createContext(stores)

const StoresProvider = storesContext.Provider

export { stores, storesContext, StoresProvider }
