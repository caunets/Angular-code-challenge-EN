import { createAction, props } from '@ngrx/store';
import { Vehicle } from 'src/app/models/Vehicle.model';

export const loadMockData = createAction('Load mock data');

export const loadMockDataSuccess = createAction(
	'Load mock data - success',
	props<{ list: Vehicle[] }>()
);

export const loadMockDataError = createAction(
	'Load mock data - error',
	props<{ error: string }>()
);