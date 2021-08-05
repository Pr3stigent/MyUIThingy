import Roact from "@rbxts/roact";
import Rodux from "@rbxts/rodux";
import RoactRodux from "@rbxts/roact-rodux";

import {} from "@rbxts/flipper";

import Actions from "client/Roact/Rodux/Actions";
import Store from "client/Roact/Rodux/StoreTypes";

type NotifierData = {
	myRegion?: string;
	Font: Enum.Font;
	Font2?: Enum.Font;
	RegionColor?: Color3;
	BackgroundColor?: Color3;
};

function RegionNotifier(props: NotifierData) {
	return (
		<frame
			Key={"RegionNotifier"}
			Position={UDim2.fromScale(0.402, 0.012)}
			Size={UDim2.fromScale(0.195, 0.168)}
			BackgroundTransparency={1}
		>
			<imagelabel
				Key={"Middle"}
				AnchorPoint={new Vector2(0.5, 0)}
				Position={UDim2.fromScale(0.5, 0.5)}
				Size={UDim2.fromScale(1.238, 0.02)}
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				BorderSizePixel={0}
				Image={"rbxassetid://7198146367"}
				ImageTransparency={0.2}
			></imagelabel>
			<frame
				Key={"Region"}
				Position={UDim2.fromScale(0.015, 0.2)}
				Size={UDim2.fromScale(0.971, 0.3)}
				BackgroundTransparency={1}
				ClipsDescendants
			>
				<textlabel
					Position={UDim2.fromScale(0, 0)}
					Size={UDim2.fromScale(1, 1)}
					BackgroundTransparency={1}
					Font={props.Font || Enum.Font.SpecialElite}
					Text={props.myRegion}
					TextColor3={props.RegionColor || Color3.fromRGB(255, 255, 255)}
					TextScaled
					TextStrokeTransparency={0.9}
				></textlabel>
			</frame>
			<frame
				Key={"Background"}
				Position={UDim2.fromScale(0.015, 0.58)}
				Size={UDim2.fromScale(0.971, 0.25)}
				BackgroundTransparency={1}
				ClipsDescendants
			>
				<textlabel
					Position={UDim2.fromScale(0, 0)}
					Size={UDim2.fromScale(1, 0.767)}
					BackgroundTransparency={1}
					Font={props.Font2 || Enum.Font.SourceSansItalic}
					TextColor3={props.BackgroundColor || Color3.fromRGB(0, 0, 0)}
					TextScaled
					TextStrokeTransparency={0.9}
				></textlabel>
			</frame>
		</frame>
	);
}
const mapStateToProps = (state: Store, props: {}) => () => {
	//print(state.myRegion, props);

	return {
		myRegion: state.myRegion,
	};
};
export = RoactRodux.connect(mapStateToProps)(RegionNotifier);
