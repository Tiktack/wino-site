import { Title } from "@solidjs/meta";
import { createSignal } from "solid-js";
import { Button } from "~/components/core/Button/Button";
import ListItem from "~/components/core/ListItem/ListItem";
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
			Welcome!
		</main>
	);
}
