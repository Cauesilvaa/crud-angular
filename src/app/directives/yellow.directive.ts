import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[directive-yellow]'
})
export class YellowDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#eff300cb'
   }

}
