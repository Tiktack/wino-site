import type { JSX } from "solid-js";
import { Navbar } from "./Navbar";

type MainLayoutProps = {
	children: JSX.Element;
};

export const MainLayout = (props: MainLayoutProps) => {
	return (
		<div class="min-h-screen pt-[56px] before:fixed before:inset-0 before:w-full before:h-full before:scale-[2] before:-z-10 before:bg-[url('https://fluent-svelte.vercel.app/bloom-mica-dark.png')] before:bg-cover before:bg-center before:bg-no-repeat before:bg-fixed">
			<Navbar />
			{props.children}
		</div>
	);
};