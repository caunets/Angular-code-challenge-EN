import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { MockDataState, mockDataReducer } from "./mock-data/mock-data.reducers";
import { MockDataEffects } from "./mock-data/mock-data.effects";


export interface AppState {
  mockData: MockDataState;
}

export const reducers: ActionReducerMap<AppState> = {
	mockData: mockDataReducer,
};

export const effects = [
	MockDataEffects,
];

export const metaReducers: MetaReducer<AppState>[] = [];