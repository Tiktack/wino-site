import { Title } from '@solidjs/meta';
import { A } from '@solidjs/router';
import { HttpStatusCode } from '@solidjs/start';
import * as stylex from '@stylexjs/stylex';
import { Button } from '~/components/core/Button/Button';
import { TextBlock } from '~/components/core/TextBlock/TextBlock';

export default function NotFound() {
	return (
		<main {...stylex.attrs(styles.main)}>
			<Title>Wino | Not Found</Title>
			<HttpStatusCode code={404} />
			<TextBlock variant="title">
				The page you are looking for does not exist.
			</TextBlock>
			<TextBlock variant="body">
				But hey, our home page is full of interesting stuff! Why don't you check
				it out instead? 🏡✨
			</TextBlock>
			<Button variant="accent" as={A} href="/">
				Go home
			</Button>
		</main>
	);
}

const styles = stylex.create({
	main: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100vh',
		gap: '1rem',
	},
});
