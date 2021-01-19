import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  @HostBinding('style.background') backgroundColor: string;

  constructor() {}
    @HostListener('mouseover') onMouseOver(){
      this.backgroundColor = "yellow"
    }
    @HostListener('mouseout') onMouseOut(){
      this.backgroundColor = "none"
    }

}
