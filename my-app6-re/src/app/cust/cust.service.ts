import { Injectable } from '@angular/core';

@Injectable()
export class CustService {

  constructor() { }
  getCurrentTime(){

    return new Date();
    
  }
}
