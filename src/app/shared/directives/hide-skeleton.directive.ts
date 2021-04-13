import { AfterViewInit, Directive, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appHideSkeleton]'
})
export class HideSkeletonDirective implements AfterViewInit {

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  ngAfterViewInit(): void {
    this.hideSkeleton();
  }

  hideSkeleton(): void {
    const appSkeletonEl = this.document.getElementById('appSkeleton');
    this.renderer.setStyle(appSkeletonEl, 'display', 'none');
  }
}
