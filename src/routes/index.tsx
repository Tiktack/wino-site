import { Title } from "@solidjs/meta";
import { createSignal } from "solid-js";
import { TextBlock } from "~/components/core/TextBlock/TextBlock";

export default function Home() {
	return (
		<main
			style={{
				display: "flex",
				"flex-direction": "column",
				"align-items": "center",
				"justify-content": "center",
				gap: "1rem",
				color: "white",
			}}
		>
			<Title>WinoMail | Home</Title>
			<div
				style={{
					width: "70%",
					display: "flex",
					"flex-direction": "column",
					"align-items": "center",
					"justify-content": "center",
				}}
			>
				<TextBlock variant="title">WinoMail</TextBlock>
				<TextBlock variant="caption">
					Native mail client for Windows device families
				</TextBlock>
				<img src="/WinoPromo.png" aria-label="wino" />
			</div>
		</main>
	);
}
