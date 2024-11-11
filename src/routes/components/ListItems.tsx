import { Title } from "@solidjs/meta";
import ListItem from "~/components/core/ListItem/ListItem";
import { TbGasStation, TbCar, TbTableOptions } from "solid-icons/tb";

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
					<TbGasStation />
					Selected
				</ListItem>
				<ListItem disabled>
					<TbCar />
					Disabled
				</ListItem>
				<ListItem selected>
					<TbTableOptions />
					Selected Disabled
				</ListItem>
			</div>
		</main>
	);
}