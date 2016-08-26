import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector: 'keg-display',
    inputs: ['keg'],
  template: `
  <div>
 <input *ngIf="keg.tapped === true" type="checkbox" checked (click)="toggleTapped(false)"/>
 <input *ngIf="keg.tapped === false" type="checkbox" (click)="toggleTapped(true)"/>
 <label>{{ keg.description }}</label>
</div>
  `
})
export class KegComponent {
  public keg: Keg;
  toggleDone(setCompleteness: boolean){
    this.keg.tapped = setCompleteness;
  }
}
