import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';
import { EditKegDetailsComponent} from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import {CompletenessPipe} from './completeness.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [CompletenessPipe],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  template: `
  <select (change)="onChange($event.target.value)">
  <option value="all">Show All</option>
  <option value="isTapped">Show Tapped</option>
  <option value="notTapped" selected="selected">Show Not Tapped</option>
</select>
  <keg-display *ngFor="#currentKeg of kegList completeness" (click)="kegClicked(currentKeg)" [class.selected]="currentKeg === selectedKeg"
  [keg]="currentKeg">
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
  </edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg : Keg;
  public selectedCompleteness: string = "notTapped";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log('child', clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(keg): void {
    this.kegList.push(
      new Keg(keg.userDescription, keg.userPrice, keg.userContent, keg.userPints)
    )
  }
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
}
