import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `

  <div class="keg-form">

  <p>Edit Description: {{keg.description}}<p>
  <input [(ngModel)]="keg.description"/>
  <p>Edit Price: {{keg.price}}</p>
  <input [(ngModel)]="keg.price"/>
  <p>Edit Alchol content: {{keg.content}}</p>
  <input [(ngModel)]="keg.content"/>

  </div>
  
  `
})

export class EditKegDetailsComponent{
  public keg: Keg;
}
