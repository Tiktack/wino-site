import "./app.css";
import "./components/theme.css";

import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { MainLayout } from "./components/layouts/MainLayout";
import Navbar from "./components/Navbar/Navbar";
import { IconButton } from "./components/core/IconButton/IconButton";
import { SiDiscord, SiGithub } from "solid-icons/si";

export default function App() {
	return (
		<Router
			root={(props) => (
				<MetaProvider>
					<Title>Wino Mail</Title>

					<MainLayout>
						<Navbar
							items={[
								{
									href: "/",
									name: "Home",
								},
								{
									href: "/blog",
									name: "Blog",
								},
								{
									href: "/documentation",
									name: "Documentation",
								},
								{
									href: "/components/buttons",
									name: "Components",
								},
							]}
							buttons={
								<div style={{ display: "flex", "flex-direction": "row" }}>
									<IconButton variant="standard">
										<SiDiscord />
									</IconButton>
									<IconButton variant="standard" disabled>
										<SiGithub />
									</IconButton>
								</div>
							}
						/>
						<Suspense>{props.children}</Suspense>
					</MainLayout>
				</MetaProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
