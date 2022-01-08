import { KeyValue } from '@angular/common';
import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YlSelectBoxComponent),
    }
  ]
})
export class YlSelectBoxComponent implements ControlValueAccessor {

  @Input() title: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() formControlName: string = '';
  @Input() list: KeyValue<string, string>[] = [];
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() showColon: boolean = true;

  @Output() valueChange = new EventEmitter<string>()

  @ViewChild('ylSelectBox') input: ElementRef | undefined;

  hasError = false;
  focused = false;

  onChange: any = () => { };
  onTouched: any = () => { };

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


}
