import { Directive, ElementRef, Renderer2, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appColorInscripto]',
  standalone: false
})
export class ColorInscriptoDirective implements OnChanges {
  @Input() appColorInscripto: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    if (this.appColorInscripto) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    }
  }
}

