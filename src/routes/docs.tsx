import type { RouteSectionProps } from '@solidjs/router';
import { SidebarLayout } from '~/components/layouts/SidebarLayout';

export default function DocsLayout(props: RouteSectionProps) {
	return (
		<SidebarLayout
			routes={[
				{
					name: 'Overview',
					path: '/docs/overview',
				},
				{
					name: 'Install',
					path: '/docs/install',
				},
			]}
		>
			{props.children}
		</SidebarLayout>
	);
}
