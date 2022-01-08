import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YlTextBoxComponent),
    }
  ]
})
export class YlTextBoxComponent implements ControlValueAccessor {

  @Input() title: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() formControlName: string = '';
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() showColon: boolean = true;

  @Output() valueChange = new EventEmitter<string>()
  @Output() selectClick = new EventEmitter<boolean>();

  @ViewChild('ylTextBox') input: ElementRef | undefined;

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

  openDropdownClick() {
    this.selectClick.emit(true);
  }

}
