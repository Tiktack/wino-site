import { Title } from '@solidjs/meta';
import * as stylex from '@stylexjs/stylex';
import { TextBlock } from '~/components/core/TextBlock/TextBlock';

export default function OverviewPage() {
	return (
		<main {...stylex.attrs(styles.content)}>
			<Title>Wino | Docs | Comming Soon</Title>

			<TextBlock variant="titleLarge">Comming Soon</TextBlock>
			<TextBlock variant="body">
				We are working hard to bring you the best documentation possible. Please
				check back later.
			</TextBlock>
		</main>
	);
}

const styles = stylex.create({
	content: {
		padding: '2rem',
		margin: 'auto auto',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		// borderTopLeftRadius: '0.75rem',
		minHeight: '100vh', // Add full viewport height
		// justifyContent: 'center', // Center vertically
		// alignItems: 'center', // Center horizontally
		flexGrow: 1, // Add this to make it take full available width
		maxWidth: '100%', // Ensure it doesn't overflow
	},
});
