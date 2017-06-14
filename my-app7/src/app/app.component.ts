import { Component } from '@angular/core';
import {FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  attStyle="blue";
  grade="90";
  items:Object[]=[
    {name:'홍길동',age:20},
    {name:'홍길동1',age:30},
    {name:'홍길동2',age:40},
    {name:'홍길동3',age:50},
    {name:'홍길동4',age:60},
    {name:'홍길동5',age:70}];
}
