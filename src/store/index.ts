import { action, observable, makeObservable } from 'mobx'

class Store {
  @observable
  count = 1

  constructor() {
    makeObservable(this)
  }

  @action
  setCount = () => {
    this.count++
  }
}

const store = new Store()

export { store }
