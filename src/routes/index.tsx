import { Title } from "@solidjs/meta";
import { createSignal } from "solid-js";
import { Button } from "~/components/core/Button/Button";
import { ToggleSwitch } from "~/components/core/ToggleSwitch/ToggleSwitch";

export default function Home() {
	const [switchState, setSwitchState] = createSignal(false);
	return (
		<main
			style={{
				display: "flex",
				"flex-direction": "column",
				gap: "1rem",
				color: "white",
			}}
		>
			<Title>Components</Title>
			Buttons
			<div
				style={{
					display: "flex",
					"flex-direction": "row",
					gap: "1rem",
				}}
			>
				<Button variant={switchState() ? "accent" : "standard"}>
					Standard
				</Button>
				<Button variant={"accent"}>Accent</Button>
				<Button variant={"hyperlink"}>Click me</Button>
				<Button variant={"standard"} disabled>
					Standard Diasbled
				</Button>
				<Button variant={"accent"} disabled>
					Accent Disabled
				</Button>
				<Button variant={"hyperlink"} disabled>
					HyperLink disabled
				</Button>
			</div>
			ToggleSwitch
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
