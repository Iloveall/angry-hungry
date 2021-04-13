import { Directive, HostListener, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appFocusOut]'
})
export class FocusOutDirective implements AfterViewInit {
  @Output() blurEvent = new EventEmitter();

  isOpened = false;

  @HostListener('window:click', ['$event'])
  onWindowClick(e: any): void {
    if (!this.isOpened) {
      return;
    }

    let elem = e.target;
    let allowToClose = true;

    while (elem.parentElement) {
      elem = elem.parentElement;

      console.log('this.el.nativeElement.tagName', this.el.nativeElement.tagName);
      /*'APP-PRODUCT-DETAILS'*/
      if (elem.tagName === this.el.nativeElement.tagName) {
        allowToClose = false;
        break;
      }
    }

    if (allowToClose) {
      this.blurEvent.emit(e);
    }
  }

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isOpened = true;
    });
  }

}
