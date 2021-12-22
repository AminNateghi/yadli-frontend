import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '@app/shared/models/vehicle.model';
import { VehicleService } from '@app/shared/services/vehicle.service';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  vehicles: Vehicle[] = [];

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
    this.vehicleService.getAll().subscribe(result => {
      if (result.success) {
        this.vehicles = result.data;
      }
    });
  }

  addVehicleClick() {
    this.router.navigate(['vehicle', 'add']);
  }
}