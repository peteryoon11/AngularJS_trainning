import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  handleEvent(m)
  {
    console.log(m);
    console.log(m.target.value)
  }
  handleEvent2(m)
  {
    console.log(m);
  }
}
