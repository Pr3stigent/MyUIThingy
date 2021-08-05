import Rodux, { combineReducers } from "@rbxts/rodux";

import Actions from "../Actions";
import Store from "../StoreTypes";

import RegionReducer from "./RegionReducer";

const reducers = combineReducers<Store, Actions>({
	myRegion: RegionReducer,
});

export = reducers;
