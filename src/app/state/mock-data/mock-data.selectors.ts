import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MockDataState } from './mock-data.reducers';

const stateFeature = createFeatureSelector<MockDataState>('mockData');
export const selectAllMockData = createSelector(
	stateFeature,
	(state: MockDataState) => state.list
);