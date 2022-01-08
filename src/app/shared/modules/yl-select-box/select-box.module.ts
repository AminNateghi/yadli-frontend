import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { YlSelectBoxComponent } from "./select-box.component";

@NgModule({
  declarations: [
    YlSelectBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    YlSelectBoxComponent
  ]
})
export class YlSelectBoxModule { }
