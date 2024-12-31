import { A } from "@solidjs/router";
import { format } from "date-fns/format";
import { Button } from "~/components/core/Button/Button";
import { TextBlock } from "~/components/core/TextBlock/TextBlock";

export const Footer = () => {
	return (
		<footer
			style={{
				"background-color": "var(--solid-background-base)",
				display: "flex",
				"justify-content": "space-around",
				width: "100%",
				padding: "1rem 0",
			}}
		>
			<div
				style={{
					display: "flex",
					"flex-direction": "column",
					gap: "0.5rem",
				}}
			>
				<div
					style={{
						display: "flex",
						"align-items": "center",
						gap: "0.5rem",
					}}
				>
					<img src="/logo.png" alt="Wino Mail Logo" style={{ width: "2rem" }} />
					<TextBlock variant="subtitle">Wino Mail</TextBlock>
				</div>
				<TextBlock
					style={{
						color: "var(--text-tertiary)",
					}}
				>
					Copyright (c) {format(new Date(), "yyyy")} Wino
				</TextBlock>
			</div>
			<div
				style={{
					display: "flex",
					"flex-direction": "column",
					gap: "0.25rem",
				}}
			>
				<TextBlock
					style={{
						padding: "0.6rem",
						color: "var(--text-tertiary)",
					}}
				>
					Contribute
				</TextBlock>
				<Button
					variant="hyperlink"
					as="a"
					href="https://github.com/bkaankose/Wino-Mail/issues/new/choose"
					target="_blank"
				>
					GitHub Issue
				</Button>
				<Button
					variant="hyperlink"
					as="a"
					href="https://github.com/bkaankose/Wino-Mail/blob/main/CONTRIBUTING.md"
					target="_blank"
				>
					Contribution Guideline
				</Button>
			</div>
			<div
				style={{
					display: "flex",
					"flex-direction": "column",
					gap: "0.25rem",
				}}
			>
				<TextBlock
					style={{
						padding: "0.6rem",
						color: "var(--text-tertiary)",
					}}
				>
					Support
				</TextBlock>
				<Button variant="hyperlink" as={A} href="/Privacy">
					Privacy
				</Button>
			</div>
		</footer>
	);
};
