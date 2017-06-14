import { Component, OnInit } from '@angular/core';
import {CustService} from './cust.service';
@Component({
  selector: 'app-cust',
  templateUrl: './cust.component.html',
  styleUrls: ['./cust.component.css']
  ,providers: [CustService]
})
export class CustComponent implements OnInit {
time;
  constructor(public service: CustService) {
    this.time= service.getCurrentTime();

   }

  ngOnInit() {
  }

}
