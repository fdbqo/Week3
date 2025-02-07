import { Component } from '@angular/core';
import { CounterService } from '../counter.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  constructor(public counterService: CounterService) { }
}
