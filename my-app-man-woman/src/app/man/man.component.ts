import { Component, OnInit } from '@angular/core';
import {SharedServiceService} from '../shared-service.service';

@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.css']
})
export class ManComponent  {
  mesg;
  constructor(public service : SharedServiceService) { }
addName(n)
{
  this.service.addName(n);
  this.mesg= this.service.names;
}


}
