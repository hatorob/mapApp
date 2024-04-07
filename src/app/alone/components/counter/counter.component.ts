import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter-alone',
  standalone: true,
  //imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input()
  public number: number = 10;

  public counter = ():void => {
    this.number++;
  }
}
