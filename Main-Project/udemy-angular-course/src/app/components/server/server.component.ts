import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  id:number;
  name:string = "Sem nome";
  isRunning: boolean;
  constructor() {
    this.id = Math.floor( Math.random() * 1000 ) ;
    this.isRunning = Math.random() > 0.4999 ? true : false;
  }

  ngOnInit(): void {
  }

  getStyle(): Object {
    let style = {
      "background-color" : this.isRunning ? 'green' : 'red',
      "font-weight" : this.isRunning ? 'bolder' : 'lighter',
      "color" : this.isRunning ? 'white' : 'gray'
    }
    return style;
  }

  setName( name_:string ){
    console.log(`setName invocado. Tentando atribuir o valor ${ name_ } para o parametro name`)
    this.name = name_;
  }
  // getColor(): string{
  //   return this.isRunning ? 'green' : 'red';
  // }

  // getFontWeight(): string{
  //   return this.isRunning ? 'bolder' : 'lighter';
  // }
}
