import "./app.css";
import "./components/theme.css";

import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { MainLayout } from "./components/layouts/MainLayout";

export default function App() {
	return (
		<Router
			root={(props) => (
				<MetaProvider>
					<Title>SolidStart - Basic</Title>

					<MainLayout>
						<a href="/">Index</a>
						<a href="/about">About</a>
						<a href="/components/buttons">Components</a>
						<Suspense>{props.children}</Suspense>
					</MainLayout>
				</MetaProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
