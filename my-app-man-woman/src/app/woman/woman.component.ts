import { Component, OnInit } from '@angular/core';
import {SharedServiceService} from '../shared-service.service';

@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.css']
  ,providers:[SharedServiceService]
})
export class WomanComponent  {
mesg;

  constructor(public service: SharedServiceService) { }
addName(n)
{
  this.service.addName(n);
  this.mesg= this.service.names;
}
 
}
