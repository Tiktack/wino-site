import { Title } from "@solidjs/meta";
import { Button } from "~/components/core/Button/Button";

export default function Buttons() {

	return (
		<main>
			<Title>Buttons</Title>
			<div
				style={{
					display: "flex",
					"flex-direction": "row",
					gap: "1rem",
				}}
			>
				<Button variant="standard">Standard</Button>
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
		</main>
	);
}