import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mesg="happy";
  ccc=[100,200,300];
  mesg3={name:"ggg",age:20};
  eventHanldeP(x){
    console.log("부모에서 받음!",x);
  }
}
