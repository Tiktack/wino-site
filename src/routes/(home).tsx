import { Title } from '@solidjs/meta';
import { A } from '@solidjs/router';
import * as stylex from '@stylexjs/stylex';
import { For } from 'solid-js';
import { Button } from '~/components/core/Button/Button';
import { TextBlock } from '~/components/core/TextBlock/TextBlock';
import { base, colors } from '~/shared/theme/tokens.stylex';
import winoPromo from '../../public/WinoPromo.png';

const KEY_FEATURES_ITEMS = [
	{
		title: 'Native Windows App',
		description:
			'Seamlessly integrated with Windows 11 for a native user experience.',
	},
	{
		title: 'Simple',
		description: 'Intuitive interface for effortless email management.',
	},
	{
		title: 'Performance',
		description: 'Lightning-fast email processing and smooth operations.',
	},
	{
		title: 'Offline Possibilities',
		description:
			'Access and manage your emails even without an internet connection.',
	},
	{
		title: 'Customization',
		description:
			'Tailor the app to your preferences with extensive customization options.',
	},
];

export default function HomePage() {
	return (
		<main {...stylex.attrs(styles.main)}>
			<Title>WinoMail | Home</Title>

			<div {...stylex.attrs(styles.container)}>
				<TextBlock variant="titleLarge">Welcome to Wino Mail</TextBlock>

				<TextBlock variant="bodyLarge" {...stylex.attrs(styles.textTertiary)}>
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

				<img
					src={winoPromo}
					{...stylex.attrs(styles.image)}
					aria-label="wino"
				/>

				<TextBlock variant="body">Key Features</TextBlock>

				<div {...stylex.attrs(styles.featuresGrid)}>
					<For each={KEY_FEATURES_ITEMS}>
						{(feature) => (
							<div {...stylex.attrs(styles.featureCard)}>
								<TextBlock variant="subtitle">{feature.title}</TextBlock>

								<TextBlock
									variant="bodyLarge"
									{...stylex.attrs(styles.textTertiary, styles.textCenter)}
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
		width: '70%',
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
	textCenter: {
		textAlign: 'center',
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
});
