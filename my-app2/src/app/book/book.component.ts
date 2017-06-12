import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent  {

  constructor() { 
    console.log("book constructor");
  }
  mesg="book";

  

}
