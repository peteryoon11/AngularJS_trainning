import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {

  transform(value: any, args?: any, args2?:any): any {
   
   console.log(value,args,args2);

   console.log(args2);
   if(value.length==8&&args!=undefined)
   {
    return value.substring(0,4)+args+value.substring(4,6)+args
    +value.substring(6,8);  
   }
    return null;
  }

}
