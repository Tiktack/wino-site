import { Title } from "@solidjs/meta";
import ListItem from "~/components/core/ListItem/ListItem";
import { AlertIcon, MoreHorizontalIcon, OptionsIcon } from "solid-fluent-icons";

export default function ListItems() {
	return (
		<main>
			<Title>List Items</Title>
			<div
				style={{
					display: "flex",
					"flex-direction": "column",
					width: "299px",
					gap: "1rem",
				}}
			>
				<ListItem>Standard</ListItem>
				<ListItem selected>
					<OptionsIcon />
					Selected
				</ListItem>
				<ListItem disabled>
					<MoreHorizontalIcon />
					Disabled
				</ListItem>
				<ListItem selected>
					<AlertIcon />
					Selected Disabled
				</ListItem>
			</div>
		</main>
	);
}