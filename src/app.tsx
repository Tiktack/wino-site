import "./app.css";
import "./components/theme.css";

import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { MainLayout } from "./components/layouts/MainLayout";
import { ThemeProvider } from "./shared/theme/provider";

export default function App() {
	return (
		<Router
			root={(props) => (
				<MetaProvider>
					<Title>Wino Mail</Title>

					<ThemeProvider>
						<MainLayout>
							<Suspense>{props.children}</Suspense>
						</MainLayout>
					</ThemeProvider>
				</MetaProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
