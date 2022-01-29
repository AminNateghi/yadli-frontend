import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleBase } from '@app/shared/models/vehicle.model';
import { VehicleService } from '@app/shared/services/vehicle.service';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading = false;
  vehicles: VehicleBase[] = [];

  constructor(
    private router: Router,
    private sharedService: SharedService,
    private vehicleService: VehicleService
  ) { }

  ngOnInit(): void {
    this.sharedService.toolbarState.next({ title: 'YADLI' });
    this.getData();
  }

  getData() {
    this.isLoading = true;
    this.vehicleService.getAll().subscribe(result => {
      if (result.success) {
        this.vehicles = result.data;
      }
    }).add(() => {
      this.isLoading = false;
    });
  }

  addVehicleClick() {
    this.router.navigate(['vehicle', 'add']);
  }
}