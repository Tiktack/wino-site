import { Title } from "@solidjs/meta";
import { IconButton } from "~/components/core/IconButton/IconButton";
import { TbSettings } from "solid-icons/tb";
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
				<IconButton variant="standard">
					<TbSettings />
				</IconButton>
        <IconButton variant="standard" disabled>
					<TbSettings />
				</IconButton>
			</div>
		</main>
	);
}