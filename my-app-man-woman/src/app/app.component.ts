import { Component } from '@angular/core';
import {SharedServiceService} from './shared-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  ,providers : [SharedServiceService]
})
export class AppComponent {
  title = 'app';
  mesg;
  constructor(public service: SharedServiceService)
  {

  }

 addName(n)
  {
    this.service.addName(n);
    this.mesg=this.service.names;
  }
}
