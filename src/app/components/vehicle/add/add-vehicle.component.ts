import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { SharedService } from '@app/shared/services/shared.service';
import { VehicleService } from '@app/shared/services/vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
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
    this.form = new FormGroup({
      name: new FormControl(''),
      brandName: new FormControl(''),
      modelName: new FormControl(''),
      year: new FormControl(''),
      fuelType: new FormControl(''),
      licenseNo: new FormControl(''),
      vin: new FormControl(''),
      description: new FormControl('')
    })
  }

  saveClick() {
    // if (!this.form.valid) {
    //   this.notify.warning('Please fill add fields.');
    //   return;
    // }

    // this.vehicleService.update(this.form.value).subscribe(result => {
    //   if (result.success) {
    //     this.notify.success('Profile updated.');
    //     this.router.navigate(['profile', 'view']);
    //   } else {
    //     this.notify.error(result.message);
    //   }
    // });
  }
}