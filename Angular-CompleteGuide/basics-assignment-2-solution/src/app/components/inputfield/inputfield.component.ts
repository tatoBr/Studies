import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputfield',
  templateUrl: './inputfield.component.html',
  styleUrls: ['./inputfield.component.css']
})
export class InputfieldComponent implements OnInit {
  username:string="";
  nameIsEmpty = true;

  constructor() { }

  isEmpty(){
    if( this.username ) this.nameIsEmpty = false;
    else this.nameIsEmpty = true;
  }

  clearName(){
    this.username = "";
    this.isEmpty();
  }
  ngOnInit(): void {
  }

}
