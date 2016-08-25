import { Keg } from './keg.model';
import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';



@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Ale House Dashboaard</h1>
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
