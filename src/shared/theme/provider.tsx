import { cookieStorage, makePersisted } from '@solid-primitives/storage';
import * as stylex from '@stylexjs/stylex';
import { type JSX, createSignal, onMount } from 'solid-js';
import { type Theme, ThemeContext } from './context';
import { darkTheme, lightTheme } from './tokens.stylex';

const THEME_COOKIE_KEY = 'theme';

type ThemeProviderProps = {
	children: JSX.Element;
};

export const ThemeProvider = (props: ThemeProviderProps) => {
	const [localTheme, setTheme] = makePersisted(createSignal<Theme>(), {
		storage: cookieStorage,
		name: THEME_COOKIE_KEY,
	});

	onMount(() => {
		if (!localTheme()) {
			setTheme(
				window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light',
			);
		} else {
			// TODO: Hack to force re-render on first load
			setTheme(localTheme() === 'light' ? 'dark' : 'light');
			setTimeout(() => {
				setTheme(localTheme() === 'light' ? 'dark' : 'light');
			}, 0);
		}
	});

	const theme = () => localTheme() ?? 'dark';

	const toggleTheme = () => {
		setTheme(theme() === 'light' ? 'dark' : 'light');
	};

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const themes: Record<Theme, stylex.Theme<any>> = {
		light: lightTheme,
		dark: darkTheme,
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div {...stylex.attrs(themes[theme()])}>{props.children}</div>
		</ThemeContext.Provider>
	);
};
