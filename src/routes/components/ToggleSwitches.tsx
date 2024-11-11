import { Title } from "@solidjs/meta";
import { createSignal } from "solid-js";
import { ToggleSwitch } from "~/components/core/ToggleSwitch/ToggleSwitch";

export default function ToggleSwitches() {

  const [switchState, setSwitchState] = createSignal(false);

	return (
		<main>
			<Title>Buttons</Title>
			<div
				style={{
					display: "flex",
					"flex-direction": "row",
				}}
			>
				<ToggleSwitch label="Default" />
				<ToggleSwitch label="Default Disabled" disabled />
				<ToggleSwitch defaultChecked label="Checked disabled" disabled />
				<ToggleSwitch defaultChecked label="Default checked" />
				<ToggleSwitch description="Description" label="Default description" />
				<ToggleSwitch
					checked={switchState()}
					onChange={(checked) => setSwitchState(checked)}
					label="Binded"
				/>
				<ToggleSwitch
					checked={switchState()}
					onChange={(checked) => setSwitchState(checked)}
					label="Binded two"
				/>
			</div>
		</main>
	);
}