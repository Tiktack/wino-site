import { Title } from "@solidjs/meta";
import { IconButton } from "~/components/core/IconButton/IconButton";
import Settings24Regular from "@fluentui/svg-icons/icons/settings_24_regular.svg?raw";
import { FluentIcon } from "~/components/FluentIcon";

export default function IconButtons() {
	return (
		<main>
			<Title>Icon Button</Title>
			<div
				style={{
					display: "flex",
					"flex-direction": "row",
					gap: "1rem",
				}}
			>
				<IconButton>
					<FluentIcon icon={Settings24Regular} />
				</IconButton>
				<IconButton disabled>
					<FluentIcon icon={Settings24Regular} />
				</IconButton>
			</div>
		</main>
	);
}