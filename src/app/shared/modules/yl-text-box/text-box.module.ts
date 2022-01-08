import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { YlTextBoxComponent } from "./text-box.component";

@NgModule({
  declarations: [
    YlTextBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    YlTextBoxComponent
  ]
})
export class YlTextBoxModule { }
