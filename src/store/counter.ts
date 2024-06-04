import { makeAutoObservable } from 'mobx';

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this, {},{ autoBind: true })
  }

  get doubledCount() {
    return this.count * 2
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

export default new CounterStore();
