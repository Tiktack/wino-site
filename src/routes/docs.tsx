import { Title } from '@solidjs/meta';
import type { RouteSectionProps } from '@solidjs/router';
import { SidebarLayout } from '~/components/layouts/SidebarLayout';
import { getDocRoutes } from '~/shared/lib/mdx';

export default function DocsLayout(props: RouteSectionProps) {
	const docRoutes = getDocRoutes();

	return (
		<>
			<Title>Wino | Docs </Title>
			<SidebarLayout routes={docRoutes}>{props.children}</SidebarLayout>
		</>
	);
}
