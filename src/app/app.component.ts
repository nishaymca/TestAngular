import { Component } from '@angular/core';

export class Pincode{
	id:number;
	name:string;
}
const PINCODES: Pincode[] = [
	{id:110088,name:'Shalimar Bagh'},
	{id:110016,name:'Green Park'},
	{id:110001,name:'Connaught Place'},
	{id:110085,name:'Rohini'},
	{id:400001,name:'Andheri'}
];

@Component({
  selector: 'app-root',
  template: `
  <h1>
  Welcome to {{title}}
</h1>
<ul class=''>
<li *ngFor="let pin of pincodes" (click)="onSelect(pin)">
<span>{{pin.id}}</span>-<span>{{pin.name}}</span>
</li>
</ul>
<div *ngIf="selectedPincode">
      <h2>{{selectedPincode.name}} details!</h2>
      <div><label>id: </label>{{selectedPincode.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedPincode.name" placeholder="name"/>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {
  pincodes = PINCODES;
  selectedPincode : Pincode;
  title = 'Delivery Kwik'; 
  onSelect(pincode:Pincode) : 	void{
   this.selectedPincode = pincode;
  }
}