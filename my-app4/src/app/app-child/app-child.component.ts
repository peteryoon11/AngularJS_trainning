import { Component, OnInit } from '@angular/core';
import {Input, Output} from '@angular/core';

import {EventEmitter} from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css']
})
export class AppChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() aaa:string; 
  @Input('bbb') mesg:string;
  @Input() ccc:number[];
    @Input() mesg3:object;
    @Output() outputTest:string;
    // 이벤트 처리 : 부모에게 이벤트 넘긴다!
    @Output() xxx= new EventEmitter();
    handleEvent(x){
      console.log("handleEvent",x);
      this.xxx.emit(x);// 부모에게 넘어감 
    }
}
