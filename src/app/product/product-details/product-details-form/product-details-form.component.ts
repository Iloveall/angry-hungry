import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProductOptionInterface } from '../../types/product-option.intefrace';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, map, take, takeUntil } from 'rxjs/operators';

const AMOUNT_VALUE = 1;

@Component({
  selector: 'app-product-details-form',
  templateUrl: './product-details-form.component.html',
  styleUrls: ['./product-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsFormComponent implements OnInit {
  @Output() submitForm: EventEmitter<any> = new EventEmitter();

  private readonly unsubscribe$ = new Subject<void>();
  private formValueSubject$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private formValue$ = this.formValueSubject$.asObservable();

  @Input() set formValue(data: any) {
    this.formValueSubject$.next(data);
  }

  @Input() options!: ProductOptionInterface[];

  form!: FormGroup;

  get values(): FormArray {
    return this.form.get('values') as FormArray;
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
    this.buildControls();
    this.updateValues();
  }

  createForm(): void {
    this.form = this.fb.group({
      values: new FormArray([])
    });
  }

  buildControls(): void {
    this.options.forEach(option => {
      const control = new FormGroup({
        id: new FormControl(option.id),
        option: new FormControl(null),
        amount: new FormControl(AMOUNT_VALUE),
        price: new FormControl(option.price)
      });
      this.values.push(control);
    });
  }

  buildFormValues = (formValue: any) => {
    let values: any = [];

    this.options.forEach(option => {
      const value = formValue.values.find((v: any) => v.id === option.id);
      values = [...values, value || {}];
    });

    return {values};
  }

  updateValues(): void {
    this.formValue$.pipe(
      filter(formValue => !!formValue),
      take(1),
      map(this.buildFormValues)
    )
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(formValue => this.form.patchValue(formValue));
  }

  onSubmit(event: Event): void {
    this.submitForm.next(this.form.value);
  }

  onOptionChange(event: MatCheckboxChange, control: AbstractControl): void {
    if (event.checked) {
      control.get('amount')?.setValue(AMOUNT_VALUE);
    }
  }

  onAmountChange(event: number, control: AbstractControl): void {
    if (event === 0) {
      control.get('option')?.setValue(false);
    }
  }
}
