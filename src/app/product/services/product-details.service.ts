import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductDetailsService {
  showDetailsSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get showDetails$(): Observable<boolean> {
    return this.showDetailsSubject$.asObservable();
  }

  showDetails(): void {
    this.showDetailsSubject$.next(true);
  }

  hideDetails(): void {
    this.showDetailsSubject$.next(false);
  }
}
