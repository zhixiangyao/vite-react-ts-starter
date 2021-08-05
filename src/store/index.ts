import { action, observable, makeObservable } from 'mobx'
import { getLocalStorage, setLocalStorage } from '/@/utils'

class Store {
  @observable
  count = getLocalStorage('value') ? Number(getLocalStorage('value')) : 0

  constructor() {
    makeObservable(this)
  }

  @action
  setCount = () => {
    this.count++
    setLocalStorage('value', this.count)
  }
}

const store = new Store()

export { store }
