import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
  <h3>Create Keg:</h3>
  <h4>Enter Description:</h4>
  <input placeholder="Description" class="input-lg"#newDescription>
  <h4>Enter Price:</h4>
  <input placeholder="Price" class="input-lg"#newPrice>
  <h4>Enter Alc. Content:</h4>
  <input placeholder="Alc. Content" class="input-lg"#newContent>
  <h4>Enter Pint Qty.</h4>
  <input placeholder="Pint Qty" class="input-lg"#newPints>
  <button (click)="addKeg(newDescription, newPrice, newContent, newPints)">Add</button>
</div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Object>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userDescription: HTMLInputElement, userPrice: HTMLInputElement, userContent: HTMLInputElement, userPints: HTMLInputElement){
    this.onSubmitNewKeg.emit({userDescription: userDescription.value, userPrice: userPrice.value, userContent: userContent.value, userPints:userPints.value});
    userDescription.value = "";
    userPrice.value = "";
    userContent.value = "";
    userPints.value = "";
  }
}
