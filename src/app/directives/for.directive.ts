import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[directive-for]'
})
export class ForDirective implements OnInit{

  /* Em home.component.html usei a diretiva 'directive-for' e coloquei um valor 
  e no valor ta a palavra 'em' o '@Input' vai pegar oq vem dps do 'em' e vai colocar
  em um 'number[]'(number array)*/
  @Input('directive-forEm') numbers!: number[]

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<any>) {

               }

  ngOnInit(): void {
      for (const number of this.numbers) {
        this.container.createEmbeddedView(this.template, {$implicit: number})
      }
  }

}
