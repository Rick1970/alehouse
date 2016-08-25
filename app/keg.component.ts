import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector: 'keg-display',
    inputs: ['keg'],
  template: `
    <h3>{{ keg.description }}</h3>
    <p>Price:{{keg.price}}</p>
    <p>Alchol Content:{{keg.content}}</p>
  `
})
export class KegComponent {
  public keg: Keg;
}
