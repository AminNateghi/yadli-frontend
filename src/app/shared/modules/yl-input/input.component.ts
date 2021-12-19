import { Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {

  @Input() title: string = '';
  @Input() placeholder: string = '';
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() value: string = '';
  @Input() required: boolean = false;
  @Input() type: 'input' | 'dropdown' = 'input';
  @Input() formControlName: string = '';
  @Input() showColon: boolean = true;

  @Output() valueChange = new EventEmitter<string>()
  @Output() modalClick = new EventEmitter<boolean>();

  @ViewChild('ylInput') input: ElementRef | undefined;

  hasError = false;
  focused = false;

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor() {
  }

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


  checkValue(event: KeyboardEvent) {
    const value = String(event.key);
    this.hasError = this.required && value.length == 0;
    this.valueChange.emit(value);
  }

  focusChange(value: boolean) {
    this.focused = value;
  }

  focusToInput() {
    this.input?.nativeElement.focus();
  }

  openDropdown() {
    this.modalClick.emit(true);
  }

}
