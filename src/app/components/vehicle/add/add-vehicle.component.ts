import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { SharedService } from '@app/shared/services/shared.service';
import { VehicleService } from '@app/shared/services/vehicle.service';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  fuelType: KeyValue<string, string>[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
    private notify: ToastrService,
    private router: Router,
    private vehicleService: VehicleService
  ) { }

  ngOnInit(): void {
    this.sharedService.toolbarState.next({ title: 'Add vehicle' });
    this.initFields();
  }

  initFields() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      brandName: [''],
      modelName: [''],
      year: [''],
      fuelType: [''],
      licenseNo: [''],
      vin: [''],
      description: [''],
    });

    this.fuelType.push({ key: '0', value: 'Other' });
    this.fuelType.push({ key: '1', value: 'Petrol' });
    this.fuelType.push({ key: '2', value: 'Electric' });
    this.fuelType.push({ key: '3', value: 'Diesel' });
    this.fuelType.push({ key: '4', value: 'Gaseous' });
    this.fuelType.push({ key: '5', value: 'Bifuel' });
    this.fuelType.push({ key: '6', value: 'Hybrid' });
  }

  saveClick() {
    console.log(this.form);


    if (!this.form.valid) {
      this.notify.warning('Please set name.');
      return;
    }

    this.vehicleService.create(this.form.value).subscribe(result => {
      if (result.success) {
        this.notify.success('Vehicle added.');
        this.router.navigate(['']);
      } else {
        this.notify.error(result.message);
      }
    });
  }
}