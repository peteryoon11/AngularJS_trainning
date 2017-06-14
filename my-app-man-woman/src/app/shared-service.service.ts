import { Injectable } from '@angular/core';

@Injectable()
export class SharedServiceService {

public names:string[]=[];

addName(n)
{
  this.names.push(n);
}

  

}
