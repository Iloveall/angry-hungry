import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { select, Store } from '@ngrx/store';
import { totalProductsSelector } from '../../order/store/order.selectors';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  totalProducts$: Observable<number> | undefined;
  hideBadge$: Observable<boolean> | undefined;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.totalProducts$ = this.store.pipe(select(totalProductsSelector));
    this.hideBadge$ = this.totalProducts$.pipe(map(totalProducts => totalProducts === 0));
  }

  closeMenu(): void {
    this.trigger.closeMenu();
  }

}
