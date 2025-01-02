import type { JSX } from "solid-js";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import * as stylex from '@stylexjs/stylex';

type MainLayoutProps = {
	children: JSX.Element;
};

export const MainLayout = (props: MainLayoutProps) => {
	return (
		<div {...stylex.attrs(styles.container)}>
			<Navbar />
			<div {...stylex.attrs(styles.content)}>{props.children}</div>
			<Footer />

			<div {...stylex.attrs(styles.background)} />
		</div>
	);
};

const styles = stylex.create({
	container: {
		minHeight: "100vh",
		paddingTop: "56px",
		display: "flex",
		flexDirection: "column",
		position: "relative",
	},
	content: {
		flex: 1,
	},
	background: {
		position: "fixed",
		inset: 0,
		width: "100%",
		height: "100%",
		transform: "scale(2)",
		zIndex: -10,
		backgroundImage: "url('https://fluent-svelte.vercel.app/bloom-mica-dark.png')",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundAttachment: "fixed",
	},
});
