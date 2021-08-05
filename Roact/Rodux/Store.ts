import Rodux, { Store } from "@rbxts/rodux";
import Reducers from "./Reducers";

const store = new Store(Reducers);

export = store;
