import type { JSX } from "solid-js";
import styles from "./MainLayout.module.css";

type MainLayoutProps = {
	children: JSX.Element;
};

export const MainLayout = (props: MainLayoutProps) => {
	return <div class={styles.container}>{props.children}</div>;
};