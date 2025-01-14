import * as stylex from '@stylexjs/stylex';
import { type JSX, useContext } from 'solid-js';
import { type Theme, ThemeContext } from '~/shared/theme/context';
import micaBackgroundDark from '../../../../public/bloom-mica-dark.webp';
import micaBackgroundLight from '../../../../public/bloom-mica-light.webp';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

type MainLayoutProps = {
	children: JSX.Element;
};

export const MainLayout = (props: MainLayoutProps) => {
	const { theme } = useContext(ThemeContext);

	return (
		<div {...stylex.attrs(styles.container)}>
			<Navbar />
			<div {...stylex.attrs(styles.content)}>{props.children}</div>
			<Footer />

			<div {...stylex.attrs(styles.background(theme()))} />
		</div>
	);
};

const styles = stylex.create({
	container: {
		minHeight: '100vh',
		paddingTop: '56px',
		display: 'flex',
		flexDirection: 'column',
		position: 'relative',
	},
	content: {
		flex: 1,
	},
	background: (theme: Theme) => ({
		position: 'fixed',
		inset: 0,
		width: '100%',
		height: '100%',
		transform: 'scale(2)',
		zIndex: -10,
		backgroundImage:
			theme === 'dark'
				? `url(${micaBackgroundDark})`
				: `url(${micaBackgroundLight})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundAttachment: 'fixed',
	}),
});
