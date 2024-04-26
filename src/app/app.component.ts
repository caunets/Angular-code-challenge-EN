import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadMockData } from './state/mock-data/mock-data.actions';
import { Vehicle } from './models/Vehicle.model';
import { BehaviorSubject, Observable, first } from 'rxjs';
import { selectAllMockData } from './state/mock-data/mock-data.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public mockDataObs: Observable<Vehicle[]> = this.store.select(selectAllMockData);
  public vehicleSubTypesObs: BehaviorSubject<string[] | undefined> = new BehaviorSubject<string[] | undefined>(undefined);
  
  appForm = new FormGroup({
    vehicleType: new FormControl('Auto'),
    vehicleSubtype: new FormControl(''),
    vehicleLicensePlate: new FormControl('')
  });
	
  constructor(private store: Store) {}

	ngOnInit() {
		this.store.dispatch(loadMockData());
    this.onVehicleTypeChange();
  }

  public onSubmit(): void {
    // do something
  }

  public onVehicleTypeChange(): void {
    const vehicleType = this.appForm.controls['vehicleType'].value;
    console.log('vehicleType', vehicleType);

    this.mockDataObs.pipe(first()).subscribe((list: Vehicle[]) => {
      const vehicleSubtypes = list.find((item: Vehicle) => item.vehicleType === vehicleType)?.vehicleSubtype;
      this.vehicleSubTypesObs.next(vehicleSubtypes);
    });
  }
}
