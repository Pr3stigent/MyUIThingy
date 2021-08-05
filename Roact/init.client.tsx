import { Players } from "@rbxts/services";

import Roact from "@rbxts/roact";
import RoactRodux from "@rbxts/roact-rodux";

import RegionNotifier from "client/Roact/Components/RegionNotifier";

import Store from "./Rodux/Store";

const player = Players.LocalPlayer;
const playerGui = player.WaitForChild("PlayerGui") as PlayerGui;

function Main() {
	return (
		<screengui>
			<RegionNotifier Font={Enum.Font.SpecialElite} />
		</screengui>
	);
}
function App() {
	return (
		<RoactRodux.StoreProvider store={Store}>
			<Main />
		</RoactRodux.StoreProvider>
	);
}

Roact.mount(App(), playerGui, "Main");

task.wait(5);

Store.dispatch({
	type: "SetRegion",
	newRegion: "New number 4",
});
