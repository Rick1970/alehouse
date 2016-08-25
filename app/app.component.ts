import { Keg } from './keg.model';
import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  template: `
  <h3 *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)">
    {{ currentKeg.description }}
  </h3>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log('child', clickedKeg);
    this.onKegSelect.emit(clickedKeg);
  }
}


@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>To-Do List</h1>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg [] ;
  constructor(){
    this.kegs = [
      new Keg("Coors", "$150.00", "6.8%", 124),
      new Keg("Budweiser", "$150.00", "6.8%", 124),
      new Keg("Bud Light", "$140.00", "5.8%", 124),
      new Keg("Pyraimid", "$117.00", "7.6%", 124)
    ];
  }

kegWasSelected(clickedKeg: Keg): void {
    console.log('parent', clickedKeg);
  }
}
