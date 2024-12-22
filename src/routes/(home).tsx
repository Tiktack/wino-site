import { Title } from "@solidjs/meta";
import { Button } from "~/components/core/Button/Button";
import { TextBlock } from "~/components/core/TextBlock/TextBlock";
import styles from "./index.module.css";
import { For } from "solid-js";

const keyFeatures = [
	{
		title: "Native Windows App",
		description: "Seamlessly integrated with Windows 11 for a native user experience.",
	},
	{
		title: "Simple",
		description: "Intuitive interface for effortless email management.",
	},
	{
		title: "Performance",
		description: "Lightning-fast email processing and smooth operations.",
	},
	{
		title: "Offline Possibilities",
		description: "Access and manage your emails even without an internet connection.",
	},
	{
		title: "Customization",
		description: "Tailor the app to your preferences with extensive customization options.",
	},
];

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
					padding: "2rem",
					gap: "1rem",
					width: "100%",
					display: "flex",
					"flex-direction": "column",
					"align-items": "center",
					"justify-content": "center",
				}}
			>
				<TextBlock variant="titleLarge">Welcome to Wino Mail</TextBlock>
				<TextBlock
					variant="bodyLarge"
					style={{ color: "var(--text-tertiary)" }}
				>
					The perfect native replacement for Windows Mail. Powerful, intuitive,
					and designed for Windows 11.
				</TextBlock>
				<div style={{ display: "flex", "flex-direction": "row", gap: "1rem" }}>
					<Button
						variant={"accent"}
						style={{ width: "120px", "text-align": "center" }}
						as="a"
						href="docs/install"
					>
						Install
					</Button>
					<Button
						variant={"hyperlink"}
						style={{ width: "120px", "text-align": "center" }}
						as="a"
						href="docs/overview"
					>
						Learn more
					</Button>
				</div>
				<img
					src="/WinoPromo.png"
					aria-label="wino"
					style={{
						"border-radius": "0.5rem",
						width: "70%",
					}}
				/>
				<TextBlock variant="body">Key Features</TextBlock>
				<div
					style={{
						display: "grid",
						width: "100%",
						"grid-template-columns": "repeat(auto-fill, minmax(400px, 1fr))",
						gap: "1rem",
					}}
				>
					<For each={keyFeatures}>
						{(feature) => (
							<div class={styles.featureCard}>
								<TextBlock variant="subtitle">{feature.title}</TextBlock>
								<TextBlock
									variant="bodyLarge"
									style={{
										color: "var(--text-tertiary)",
										"text-align": "center",
									}}
								>
									{feature.description}
								</TextBlock>
							</div>
						)}
					</For>
				</div>
			</div>
		</main>
	);
}
