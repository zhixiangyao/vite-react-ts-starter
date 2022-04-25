import { action, observable, makeObservable } from 'mobx'

import { getLocalStorage, setLocalStorage } from '/@/utils'

class CounterStore {
  @observable
  count = getLocalStorage<string>('value') ? Number(getLocalStorage('value')) : 0

  constructor() {
    makeObservable(this)
  }

  @action
  setCount = () => {
    this.count++
    setLocalStorage('value', this.count)
  }
}

export { CounterStore }
