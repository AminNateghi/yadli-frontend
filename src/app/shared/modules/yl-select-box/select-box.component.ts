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
      useExisting: YlSelectBoxComponent
    }
  ]
})
export class YlSelectBoxComponent implements ControlValueAccessor {

  @Input() title: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() list: KeyValue<string, string>[] = [];
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() showColon: boolean = true;

  @Output() valueChange = new EventEmitter<string>()

  @ViewChild('ylSelectBox') element: ElementRef | undefined;

  hasError = false;
  focused = false;

  //#region ControlValueAccessor

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  //#endregion 


  focusChange(value: boolean) {
    this.focused = value;
  }

  focusToInput() {
    this.markAsTouched();
    this.element?.nativeElement.focus();
  }

  eventChange() {
    const value = this.element?.nativeElement.value;
    console.log(value);

    this.onChange(value);
    this.valueChange.emit(value);
  }

  markAsTouched() {
    if (!this.focused) {
      this.onTouched();
      this.focused = true;
    }
  }
}
