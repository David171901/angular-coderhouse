import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightRow]'
})
export class HighlightRowDirective implements OnChanges {
  @Input() appHighlightRow: boolean = false; 

  constructor(public elem: ElementRef, public renderer: Renderer2) {
    this.setClassTableSuccess();
  }

  ngOnChanges() {
    if (this.appHighlightRow) {
      this.setClassTableSuccess();
    } else {
      this.removeClassTableSuccess();
    }
  }

  setClassTableSuccess() {
    this.renderer.addClass(this.elem.nativeElement,'table-success');
  }

  removeClassTableSuccess() {
    this.renderer.removeClass(this.elem.nativeElement, 'table-success');
  }
}
