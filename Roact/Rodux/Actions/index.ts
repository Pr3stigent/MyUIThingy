import Rodux from "@rbxts/rodux";

interface ActionSetRegion extends Rodux.Action<"SetRegion"> {
	newRegion: string;
}

export = ActionSetRegion;
