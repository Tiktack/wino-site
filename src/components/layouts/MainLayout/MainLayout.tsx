import type { JSX } from "solid-js";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type MainLayoutProps = {
	children: JSX.Element;
};

export const MainLayout = (props: MainLayoutProps) => {
	return (
		<div
			style={{
				"min-height": "100vh",
				"padding-top": "56px",
				display: "flex",
				"flex-direction": "column",
				position: "relative",
			}}
		>
			{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
			<div
				style={{
					position: "fixed",
					inset: 0,
					width: "100%",
					height: "100%",
					transform: "scale(2)",
					"z-index": -10,
					"background-image":
						"url('https://fluent-svelte.vercel.app/bloom-mica-dark.png')",
					"background-size": "cover",
					"background-position": "center",
					"background-repeat": "no-repeat",
					"background-attachment": "fixed",
				}}
			></div>
			<Navbar />
			<div style={{ flex: "1" }}>{props.children}</div>
			<Footer />
		</div>
	);
};