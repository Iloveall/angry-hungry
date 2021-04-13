import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-done-modal',
  templateUrl: './order-done-modal.component.html',
  styleUrls: ['./order-done-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderDoneModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
