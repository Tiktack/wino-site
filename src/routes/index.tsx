import { Title } from "@solidjs/meta";
import { Button } from "~/components/core/Button/Button";

export default function Home() {
	return (
		<main
			style={{
				display: "flex",
				"flex-direction": "column",
				gap: "1rem",
				width: "200px",
			}}
		>
      <Title>Components</Title>
			<Button variant={"standard"}>Standard</Button>
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
		</main>
	);
}
