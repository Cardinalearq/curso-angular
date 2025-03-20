import { Directive, ElementRef, Renderer2, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appColorInscripto]'
})
export class ColorInscriptoDirective implements OnChanges {
  @Input() appColorInscripto: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    if (this.appColorInscripto) {
      // Cambiar color de texto a verde si está inscrito
      this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
    } else {
      // Cambiar color de texto a rojo si no está inscrito
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    }
  }
}

