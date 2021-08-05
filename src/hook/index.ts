import { useLocalObservable as uls } from 'mobx-react'
import { store } from '/@/store'

const useLocalStore = () => uls(() => store)

export { useLocalStore }
