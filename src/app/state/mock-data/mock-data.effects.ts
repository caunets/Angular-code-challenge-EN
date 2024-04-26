import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadMockData, loadMockDataError, loadMockDataSuccess } from './mock-data.actions';
import { of, from } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { MockDataService } from 'src/app/services/mock-data.service';
import { Vehicle } from 'src/app/models/Vehicle.model';

@Injectable()
export class MockDataEffects {
  constructor(
    private actions$: Actions,
		private mockDataService: MockDataService
  ) {}

  loadMockData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMockData),
      switchMap(() => {
				return from(this.mockDataService.loadMockData()).pipe(
          map((list: Vehicle[]) => loadMockDataSuccess({ list })),
          catchError((error) => of(loadMockDataError({ error })))
        )
			})
    )
  );
}

