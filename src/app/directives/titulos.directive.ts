import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: 'h1, h2, h3',
  standalone: false
})
export class TituloSizeDirective implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const tag = this.el.nativeElement.tagName.toLowerCase();

    if (tag === 'h1') {
      this.el.nativeElement.style.fontSize = '35px';
    } else if (tag === 'h2') {
      this.el.nativeElement.style.fontSize = '25px';
    } else if (tag === 'h3') {
      this.el.nativeElement.style.fontSize = '20px';
    }
  }
}
