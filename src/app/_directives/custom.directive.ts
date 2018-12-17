import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appCustom]' 
})
export class CustomDirective {
  constructor(private el:ElementRef,private renderer:Renderer) { 
    renderer.setElementStyle(el.nativeElement, 'backgroundColor','#f3f3f3');
  }
}
