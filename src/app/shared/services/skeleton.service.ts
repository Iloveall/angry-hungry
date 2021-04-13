import { Inject, Injectable, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SkeletonService {

  constructor(/*private renderer: Renderer2*/ @Inject(DOCUMENT) private document: Document) { }

  hide(): void {
    // const appSkeletonEl = this.document.getElementById('appSkeleton');
    // this.renderer.setStyle(appSkeletonEl, 'display', 'none');
  }
}
