import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-counter-control',
  templateUrl: './counter-control.component.html',
  styleUrls: ['./counter-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterControlComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CounterControlComponent),
      multi: true
    }
  ]
})
export class CounterControlComponent implements ControlValueAccessor {
  @Output() triggerBlur: EventEmitter<any> = new EventEmitter();
  @Output() triggerFocus: EventEmitter<any> = new EventEmitter();
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  @Input() placeholder: string | undefined;
  @Input() submitted: boolean | undefined;
  @Input() disabled: boolean | undefined;

  formControl!: FormControl;
  isFocused = false;
  value = 1;

  get isError(): boolean {
    return !!(
      this.formControl &&
      this.formControl.invalid &&
      (this.formControl.dirty || this.formControl.touched) && this.submitted);
  }

  public writeValue(value: number): void {
    this.value = value;
    this.propagateChange(value);
  }

  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(): void {}

  public onTouched = () => {};

  public propagateChange(value: number): void {}

  public validate(formControl: FormControl): void {
    this.formControl = formControl;
  }

  public onFocus(event: Event): void {
    this.isFocused = true;
    this.triggerFocus.emit(event);
  }

  public onBlur(event: Event): void {
    this.isFocused = false;
    this.triggerBlur.emit(event);
  }

  public onUpdated(): void {
    this.propagateChange(this.value);
    this.valueChange.emit(this.value);
  }

  increase(): void {
    this.value++;
    this.onUpdated();
  }

  reduce(): void {
    this.value--;
    this.onUpdated();
  }

  onIncrease(): void {
    this.increase();
  }

  onReduce(): void {
    this.reduce();
  }
}
