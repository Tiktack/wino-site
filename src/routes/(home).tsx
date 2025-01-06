import { Title } from '@solidjs/meta';
import { A } from '@solidjs/router';
import * as stylex from '@stylexjs/stylex';
import { For, Match, Switch, useContext } from 'solid-js';
import { Button } from '~/components/core/Button/Button';
import { TextBlock } from '~/components/core/TextBlock/TextBlock';
import winoAppDark from '../../public/wino-app-dark.png';
import winoAppLight from '../../public/wino-app-light.png';
import AlertOn from '@fluentui/svg-icons/icons/alert_on_24_regular.svg?raw';
import Code from '@fluentui/svg-icons/icons/code_24_regular.svg?raw';
import Fingerprint from '@fluentui/svg-icons/icons/fingerprint_24_regular.svg?raw';
import Accessibility from '@fluentui/svg-icons/icons/accessibility_24_regular.svg?raw';
import WifiOff from '@fluentui/svg-icons/icons/wifi_off_24_regular.svg?raw';
import DeveloperBoard from '@fluentui/svg-icons/icons/developer_board_24_regular.svg?raw';
import Color from '@fluentui/svg-icons/icons/color_24_regular.svg?raw';
import StoreMicrosoft from '@fluentui/svg-icons/icons/store_microsoft_24_regular.svg?raw';
import TableSimple from '@fluentui/svg-icons/icons/table_simple_24_regular.svg?raw';
import { FluentIcon } from '~/components/FluentIcon';
import { ThemeContext } from '~/shared/theme/context';
import { base, colors } from '~/shared/theme/tokens.stylex';

const KEY_FEATURES_ITEMS = [
	{
		icon: StoreMicrosoft,
		title: 'Native Windows App',
		description:
			'Seamlessly integrated with Windows 11 for a native user experience.',
	},
	{
		icon: TableSimple,
		title: 'Simple',
		description: 'Intuitive interface for effortless email management.',
	},
	{
		icon: DeveloperBoard,
		title: 'Performance',
		description: 'Lightning-fast email processing and smooth operations.',
	},
	{
		icon: WifiOff,
		title: 'Offline Possibilities',
		description:
			'Access and manage your emails even without an internet connection.',
	},
	{
		icon: Color,
		title: 'Customization',
		description:
			'Tailor the app to your preferences with extensive customization options.',
	},
	{
		icon: Fingerprint,
		title: 'Security & Privacy',
		description:
			'Your data stays on your device - no cloud storage or data collection.',
	},
	{
		icon: Accessibility,
		title: 'Accessibility',
		description:
			'Comprehensive accessibility features for a seamless user experience.',
	},
	{
		icon: AlertOn,
		title: 'Live Notifications',
		description: 'Stay up-to-date with real-time notifications and alerts.',
	},
	{
		icon: Code,
		title: 'Open Source',
		description: 'Contribute to the project and make it even better.',
	},
];

export default function HomePage() {
	const { theme } = useContext(ThemeContext);
	return (
		<main {...stylex.attrs(styles.main)}>
			<Title>WinoMail | Home</Title>

			<div {...stylex.attrs(styles.container)}>
				<TextBlock variant="titleLarge">Welcome to Wino Mail</TextBlock>

				<TextBlock variant="body" {...stylex.attrs(styles.textTertiary)}>
					The perfect native replacement for Windows Mail. Powerful, intuitive,
					and designed for Windows 11.
				</TextBlock>

				<div {...stylex.attrs(styles.buttonContainer)}>
					<Button
						variant={'accent'}
						as={A}
						href="docs/install"
						style={styles.button}
					>
						Install
					</Button>

					<Button
						variant={'hyperlink'}
						as={A}
						href="docs/overview"
						style={styles.button}
					>
						Learn more
					</Button>
				</div>

				<Switch>
					<Match when={theme() === 'light'}>
						<img
							src={winoAppLight}
							{...stylex.attrs(styles.image)}
							aria-label="wino"
						/>
					</Match>
					<Match when={theme() === 'dark'}>
						<img
							src={winoAppDark}
							{...stylex.attrs(styles.image)}
							aria-label="wino"
						/>
					</Match>
				</Switch>
				{/* <img
					src={winoAppDark}
					{...stylex.attrs(styles.image)}
					aria-label="wino"
				/> */}

				<TextBlock variant="title">Key Features</TextBlock>

				<div {...stylex.attrs(styles.featuresGrid)}>
					<For each={KEY_FEATURES_ITEMS}>
						{(feature) => (
							<div {...stylex.attrs(styles.featureCard)}>
								<FluentIcon
									icon={feature.icon}
									{...stylex.attrs(styles.featureIcon)}
								/>
								<TextBlock variant="subtitle">{feature.title}</TextBlock>

								<TextBlock
									variant="body"
									{...stylex.attrs(styles.textTertiary)}
								>
									{feature.description}
								</TextBlock>
							</div>
						)}
					</For>
				</div>
			</div>
		</main>
	);
}

const styles = stylex.create({
	main: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '1rem',
		color: 'white',
	},
	container: {
		padding: '2rem',
		gap: '1rem',
		width: '100%',
		maxWidth: '1300px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonContainer: {
		display: 'flex',
		flexDirection: 'row',
		gap: '1rem',
	},
	button: {
		width: '120px',
		textAlign: 'center',
	},
	image: {
		borderRadius: '0.5rem',
		width: '100%',
	},
	featuresGrid: {
		display: 'grid',
		width: '100%',
		gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
		gap: '1rem',
	},
	textTertiary: {
		color: colors.textTertiary,
	},

	featureCard: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		padding: '1rem',
		borderRadius: '0.5rem',
		backgroundColor: colors.systemBackgroundAttention,
		boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
		transition: 'transform 0.2s',
		':hover': {
			transform: 'translateY(-5px)',
			boxShadow: base.cardShadow,
		},
	},
	featureIcon: {
		width: '2rem',
		height: '2rem',
		fill: colors.textPrimary,
	},
});
