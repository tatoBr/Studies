import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers:ServerComponent[] = [];
  serverName: string = ""
  message: string = ""
  serverCreated: boolean = false;
  constructor() { }
  ngOnInit(): void { }

  onCreateServer():void{
    this.message = `Server named ${ this.serverName } was successfully created.`;
    
    let curentIndex = this.servers.length;
    this.servers.push( new ServerComponent() );
    this.servers[curentIndex].setName( this.serverName );
    this.serverName = "";
    this.serverCreated = true;
  }
}
