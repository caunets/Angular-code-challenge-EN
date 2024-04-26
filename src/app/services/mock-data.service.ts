import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vehicle } from '../models/Vehicle.model';

@Injectable({ providedIn: 'root' })
export class MockDataService {
  constructor() {}

  public loadMockData(): Observable<Vehicle[]> {
    return of([
      {
        vehicleType: 'Auto',
        vehicleSubtype: ['Hatchback', 'Sedan', 'Station', 'Cabriolet', 'Coupé', 'Multi Purpose Vehicle (MVP)', 'Terreinauto']
      },
      {
        vehicleType: 'Motor',
        vehicleSubtype: ['All-road', 'Naked', 'Enduro', 'Race', 'Toermotor', 'Chopper', 'Zijspan']
      },
      {
        vehicleType: 'Scooter'
      }
    ]);
  }
}