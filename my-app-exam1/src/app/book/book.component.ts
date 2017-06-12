import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  titleName="도서목록";
/*  bookname="test";
  image="";*/
  books=[
    {id:"p1",name:"위험한 식탁",price:2000, date : '20170401', img:"a.jpg"},
    {id:"p2",name:"공부의 비결",price:3000, date : '20170401', img:"b.jpg"},
    {id:"p3",name:"오메르타",price:2500, date : '20170401', img:"c.jpg"},

    {id:"p4",name:"행복한 여행",price:2600, date : '20170401', img:"d.jpg"},

    {id:"p5",name:"해커스 토익",price:2700, date : '20170401', img:"e.jpg"},
    {id:"p6",name:"도로 안내서",price:9000, date : '20170401', img:"f.jpg"}
    ];
    getTitleName():string
    {
      return this.titleName;
    }

}
