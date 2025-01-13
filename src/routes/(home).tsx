import Accessibility from '@fluentui/svg-icons/icons/accessibility_24_regular.svg?raw';
import AlertOn from '@fluentui/svg-icons/icons/alert_on_24_regular.svg?raw';
import Code from '@fluentui/svg-icons/icons/code_24_regular.svg?raw';
import Color from '@fluentui/svg-icons/icons/color_24_regular.svg?raw';
import DeveloperBoard from '@fluentui/svg-icons/icons/developer_board_24_regular.svg?raw';
import Fingerprint from '@fluentui/svg-icons/icons/fingerprint_24_regular.svg?raw';
import StoreMicrosoft from '@fluentui/svg-icons/icons/store_microsoft_24_regular.svg?raw';
import TableSimple from '@fluentui/svg-icons/icons/table_simple_24_regular.svg?raw';
import WifiOff from '@fluentui/svg-icons/icons/wifi_off_24_regular.svg?raw';
import { Title } from '@solidjs/meta';
import { A } from '@solidjs/router';
import * as stylex from '@stylexjs/stylex';
import { For, Show, createSignal, useContext } from 'solid-js';
import { FluentIcon } from '~/components/FluentIcon';
import { Button } from '~/components/core/Button/Button';
import { TextBlock } from '~/components/core/TextBlock/TextBlock';
import { ThemeContext } from '~/shared/theme/context';
import { base, colors } from '~/shared/theme/tokens.stylex';
import winoAppDark from '../../public/wino-app-dark.png';
import winoAppLight from '../../public/wino-app-light.png';

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
	const [previewImage, setPreviewImage] = createSignal<string | null>(null);

	const handleImageClick = (imageSrc: string) => {
		setPreviewImage(imageSrc);
	};

	const closePreview = () => {
		setPreviewImage(null);
	};

	return (
		<main {...stylex.attrs(styles.main)}>
			<Title>Wino | Home</Title>

			<div {...stylex.attrs(styles.container)}>
				<TextBlock variant="titleLarge">Welcome to Wino Mail</TextBlock>

				<TextBlock variant="body" style={styles.textTertiary}>
					The perfect native replacement for Windows Mail. Powerful, intuitive,
					and designed for Windows 11.
				</TextBlock>

				<div {...stylex.attrs(styles.buttonContainer)}>
					<Button
						variant={'accent'}
						as={A}
						href="https://apps.microsoft.com/detail/9NCRCVJC50WL?mode=full"
						style={styles.button}
					>
						Install
					</Button>

					<Button
						variant={'hyperlink'}
						as={A}
						href="docs/comming-soon"
						style={styles.button}
					>
						Learn more
					</Button>
				</div>

				<div {...stylex.attrs(styles.imageContainer)}>
					<img
						src={winoAppLight}
						onClick={() => handleImageClick(winoAppLight)}
						{...stylex.attrs(
							styles.image,
							theme() === 'light' ? styles.mainImage : styles.secondaryImage,
						)}
						aria-label="Wino Mail App light"
					/>
					<img
						src={winoAppDark}
						onClick={() => handleImageClick(winoAppDark)}
						{...stylex.attrs(
							styles.image,
							theme() === 'dark' ? styles.mainImage : styles.secondaryImage,
						)}
						aria-label="Wino Mail App dark"
					/>
				</div>

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

								<TextBlock variant="body" style={styles.textTertiary}>
									{feature.description}
								</TextBlock>
							</div>
						)}
					</For>
				</div>
			</div>

			<Show when={previewImage()}>
				<div {...stylex.attrs(styles.previewOverlay)} onClick={closePreview}>
					<img
						src={previewImage() ?? ''}
						{...stylex.attrs(styles.previewImage)}
						onClick={(e) => e.stopPropagation()}
					/>
				</div>
			</Show>
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
		gap: '0.5rem',
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
	imageContainer: {
		position: 'relative',
		width: '100%',
		height: {
			default: '730px',
			'@media (max-width: 480px)': '250px',
		},
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'visible',
	},
	image: {
		position: 'absolute',
		width: '100%',
		maxWidth: '1000px',
		borderRadius: '0.5rem',
		boxShadow: base.cardShadow,
		transition: 'all 0.7s ease-in-out',
		cursor: 'pointer',
		'@media (max-width: 480px)': {
			position: 'relative', // Change to relative on mobile
			maxWidth: '100%',
		},
	},
	secondaryImage: {
		transform: {
			default: 'rotate(-3deg) translate(-40px, -20px)',
			'@media (max-width: 480px)': 'none',
		},
		zIndex: 1,
		'@media (max-width: 480px)': {
			display: 'none',
		},
	},
	mainImage: {
		transform: {
			default: 'rotate(3deg) translate(30px, 0px)',
			'@media (max-width: 480px)': 'none',
		},
		zIndex: 2,
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
	previewOverlay: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.8)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 1000,
		cursor: 'pointer',
	},

	previewImage: {
		maxWidth: '90%',
		maxHeight: '90vh',
		borderRadius: '0.5rem',
		objectFit: 'contain',
		cursor: 'default',
	},
});
