import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: YlTextBoxComponent
    }
  ]
})
export class YlTextBoxComponent implements ControlValueAccessor {

  @Input() title: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() showColon: boolean = true;

  @Output() valueChange = new EventEmitter<string>()

  @ViewChild('ylTextBox') element: ElementRef | undefined;

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


  checkValue(event: KeyboardEvent) {
    const value = String(event.key);
    this.hasError = this.required && value.length == 0;
    const inputValue = this.element?.nativeElement.value;
    this.onChange(inputValue);
    this.valueChange.emit(inputValue);
  }

  focusChange(value: boolean) {
    this.markAsTouched();
    this.focused = value;
  }

  focusToInput() {
    this.markAsTouched();
    this.element?.nativeElement.focus();
  }

  markAsTouched() {
    if (!this.focused) {
      this.onTouched();
      this.focused = true;
    }
  }

}
