import { Component, OnInit } from '@angular/core';

import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { 
    for (var book of this.books)
    {
        this.bookResult.push(book);
    }


  }
bookResult=[];

  ngOnInit() {
  }
  colorName="yellow";
  titleName="도서목록";
  result=true;
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

    sayEcho(xxx)
    {
      console.log(xxx);
    }


// 이벤트 핸들링
    handleEvent(mesg)
    {
        console.log(mesg);
    }


setTitleName(titleName)
{
  this.titleName=titleName;
}


    focusOutHandle(result)
    {
      console.log("focusOutHandle");
//console.log(testtt);
//testtt.colorName="black";
this.result=result;
//testtt.styles="background-color:black;";

    }
    focusInHandle(result)
    {
     console.log("focusInHandle"); 
    this.result=result;
    
  }
  
  searchTitle(testt,test2)
  {
      var searchName= testt.target.value;
      console.log("서치 값 ",searchName);
      this.bookResult=[];
      if(searchName=='')
      {
          for (var book of this.books)
          {
              this.bookResult.push(book);
          }
      }
      else
      {
         for (var book of this.books)
          {
            if(book.name.indexOf(searchName)!=-1)
            {
              this.bookResult.push(book);
            }
        }
      }
 }
}
