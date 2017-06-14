import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustComponent } from './cust.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustComponent]
  , exports:[CustComponent]
  // serve 모듈은 export 를 해줘야함!!
})
export class CustModule { }
