import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails:boolean = false;
  clickLog: Object[] = [];
  clickCounter: number = 0;

  addClickLog(): void{
    let index_ : string;
    let click_ = ++this.clickCounter;
    switch( click_ ){
      case 1:
        index_ = 'st';
        break;
      case 2:
        index_ = 'nd';
        break;
      case 3:
        index_ ='rd';
        break;
      default:
        index_ = 'th'
    }
    this.clickLog.push({
      click : click_,
      message : `${ click_ } click in the button.`
    });
    if( this.clickCounter > 10 )
    {
      this.clickLog.splice( 0, 1 );
    }
  }
}
