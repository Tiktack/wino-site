import type { JSX } from "solid-js";
import styles from "./MainLayout.module.css";
import { Navbar } from "./Navbar";

type MainLayoutProps = {
	children: JSX.Element;
};

export const MainLayout = (props: MainLayoutProps) => {
	return (
		<div class={styles.container}>
			<Navbar />

			{props.children}
		</div>);
};