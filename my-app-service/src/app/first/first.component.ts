import { Component, OnInit } from '@angular/core';
import {CurrentTimeService} from '../current-time.service';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']

  
})
export class FirstComponent implements OnInit {
// 서비스 주입 
time;
  constructor(service:CurrentTimeService) {
    this.time= service.getCurrentTime();
   }

  ngOnInit() {
    
  }
 // currentDate:Date=new Date();
}
