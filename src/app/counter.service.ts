import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  count = signal<number>(0);

  doubleCount = computed(() => this.count() * 2);

  increment() {
    this.count.update(current => current + 1);
  }

  decrement() {
    this.count.update(current => current - 1);
  }

  getCount() {
    return this.count();
  }

  constructor() { }
}
