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
					Icon: News24Regular,
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
					Icon: News24Regular,
				},
				{
					name: 'ToggleSwitch',
					path: '/components/toggleswitches',
					Icon: News24Regular,
				},
				{
					name: 'ListItem',
					path: '/components/listitems',
					Icon: News24Regular,
				},
				{
					name: 'TextBlock',
					path: '/components/textblocks',
					Icon: News24Regular,
				},
				{
					name: 'IconButton',
					path: '/components/iconbuttons',
					Icon: News24Regular,
				},
				{
					name: 'Collapsible',
					path: '/components/collapsibles',
					Icon: News24Regular,
				},
				{
					name: 'ProgressBar',
					path: '/components/progressbars',
					Icon: News24Regular,
				},
				{
					name: 'ProgressRing',
					path: '/components/progressrings',
					Icon: News24Regular,
				},
				{
					name: 'ContentDialog',
					path: '/components/contentdialogs',
					Icon: News24Regular,
				},
			]}
		>
			{props.children}
		</SidebarLayout>
	);
}
