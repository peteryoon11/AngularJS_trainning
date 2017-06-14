import { Component, OnInit } from '@angular/core';
import {CurrentTimeService} from '../current-time.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

 constructor(public service:CurrentTimeService) {


  }

  ngOnInit() {
  }

}
