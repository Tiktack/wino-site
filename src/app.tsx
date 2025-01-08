import './app.css';
import './components/theme.css';

import { MetaProvider, Title } from '@solidjs/meta';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js';
import { MainLayout } from './components/layouts/MainLayout';
import { config } from './config';
import { MDXProvider } from './shared/mdx/provider';
import { ThemeProvider } from './shared/theme/provider';

export default function App() {
	return (
		<Router
			base={config.base}
			root={(props) => (
				<MetaProvider>
					<Title>Wino Mail</Title>

					<ThemeProvider>
						<MDXProvider>
							<MainLayout>
								<Suspense>{props.children}</Suspense>
							</MainLayout>
						</MDXProvider>
					</ThemeProvider>
				</MetaProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
