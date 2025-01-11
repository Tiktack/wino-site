import News24Regular from '@fluentui/svg-icons/icons/news_24_regular.svg?raw';
import type { RouteSectionProps } from '@solidjs/router';
import { SidebarLayout } from '~/components/layouts/SidebarLayout';

export default function ComponentsLayout(props: RouteSectionProps) {
	return (
		<SidebarLayout
			routes={[
				{
					name: 'Button',
					path: '/components/buttons',
					icon: News24Regular,
					routes: [
						{
							name: 'Primary Button',
							path: '/components/buttons/primary',
							routes: [
								{
									name: 'Primary Button',
									path: '/components/buttons/primary',
								},
								{
									name: 'Secondary Button',
									path: '/components/buttons/secondary',
								},
								{
									name: 'Tertiary Button',
									path: '/components/buttons/tertiary',
								},
							],
						},
						{
							name: 'Secondary Button',
							path: '/components/buttons/secondary',
						},
						{
							name: 'Tertiary Button',
							path: '/components/buttons/tertiary',
						},
					],
				},
				{
					name: 'Checkbox',
					path: '/components/checkboxes',
					icon: News24Regular,
				},
				{
					name: 'ToggleSwitch',
					path: '/components/toggleswitches',
					icon: News24Regular,
				},
				{
					name: 'ListItem',
					path: '/components/listitems',
					icon: News24Regular,
				},
				{
					name: 'TextBlock',
					path: '/components/textblocks',
					icon: News24Regular,
				},
				{
					name: 'IconButton',
					path: '/components/iconbuttons',
					icon: News24Regular,
				},
				{
					name: 'Collapsible',
					path: '/components/collapsibles',
					icon: News24Regular,
				},
				{
					name: 'ProgressBar',
					path: '/components/progressbars',
					icon: News24Regular,
				},
				{
					name: 'ProgressRing',
					path: '/components/progressrings',
					icon: News24Regular,
				},
				{
					name: 'ContentDialog',
					path: '/components/contentdialogs',
					icon: News24Regular,
				},
			]}
		>
			{props.children}
		</SidebarLayout>
	);
}
