import { Component } from '@angular/core';
import {HelloService} from './hello.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  ,providers:[HelloService]
})
export class AppComponent {
  title = 'app';
  constructor(service: HelloService){
     var test=service.sayHello();
     this.title=service.sayHello();
     console.log(test);
    // 생성하면서 한번 불러옴 
  }
  
  // AppComponent 에서 HelloService 사용하기 위해서 
  // 생성자 주입 이용한다. 


}
