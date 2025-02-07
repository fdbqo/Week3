import { Component } from '@angular/core';
import { CounterService } from './counter.service';
import { Child1Component } from "./child1/child1.component";
import { Child2Component } from "./child2/child2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Child1Component, Child2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'week3';

  constructor(public counterService: CounterService) { }

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }
}
