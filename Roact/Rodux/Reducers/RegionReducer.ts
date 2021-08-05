import Rodux from "@rbxts/rodux";
import Action from "../Actions";

const initialState = "N/A";

const reducer = Rodux.createReducer<string, Action>(initialState, {
	SetRegion: (state, action) => {
		print(state, action);
		return action.newRegion;
	},
});

export = reducer;
