import { createReducer, on } from '@ngrx/store';
import { Vehicle } from 'src/app/models/Vehicle.model';
import { loadMockData, loadMockDataSuccess, loadMockDataError } from './mock-data.actions';

export interface MockDataState {
	list: Vehicle[];
	error: string;
}

export const initialState: MockDataState = {
	list: [] as Vehicle[],
	error: '',
};

export const mockDataReducer = createReducer(
	initialState,

	on(loadMockData, (state) => ({ ...state })),

	on(loadMockDataSuccess, (state, { list }) => ({
		...state,
		list: list,
		error: '',
	})),

	on(loadMockDataError, (state, { error }) => ({
		...state,
		error: error,
	}))
);