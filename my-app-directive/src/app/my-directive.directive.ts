import { Directive } from '@angular/core';
import {Renderer} from '@angular/core';
import {ElementRef} from '@angular/core';
import {HostListener} from '@angular/core';
import {Input} from '@angular/core';
@Directive({
  selector: '[appMyDirective]'
  ,host :{
    '(mouesemove)':'onMouseMove()'
    ,'(click)':'onClick()'
  }
})


export class MyDirectiveDirective {

  @Input('appMyDirective') colorName:string="red";

onMouseMove()
{
  console.log("onMouseMove");
}
onClick()
{
  console.log("onClick",this.colorName);
   this.renderer.setElementStyle(this.el.nativeElement,"color",this.colorName);

}

// directive 를 적용한 태그 참조 : ElementRef
// 태그 화면 갱신할 객체 참조 : Renderer
  constructor(public el:ElementRef, public renderer:Renderer)
   {
      console.log(el, renderer);
      renderer.setElementStyle(el.nativeElement,"color",this.colorName);

     // renderer.setElementStyle(el.nativeElement,"font-size","30px");
      //renderer.animate();
  }
  aa()// 직접 적용하면안됨!! 
  {
    console.log("aaaa!!");
  }
  @HostListener('mouseenter')
  handleMouseEnter()
  {
    console.log("mouseenter");
  }
}
