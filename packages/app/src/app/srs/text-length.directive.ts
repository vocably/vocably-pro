import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[vocablyTextLength]',
})
export class TextLengthDirective implements AfterViewInit {
  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    this.el.nativeElement.style.setProperty(
      '--inner-text-length',
      this.el.nativeElement.innerText.length.toString()
    );
  }
}
