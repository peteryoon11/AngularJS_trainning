import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // 날짜생성
  currentDate:number= Date.now();
  currentDate2:Date= new Date();
  currentDate3:string=  new Date().toISOString();
  //JSON
  person={username:"홍길동",age:20,address:'서울'};
  
  // JSON => string
  StrinhJSOn=JSON.stringify(this.person);

  // string -> JSON
  jsonObjecy=JSON.parse(this.StrinhJSOn);
  str="20170615";
}
