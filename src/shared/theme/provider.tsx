import { cookieStorage, makePersisted } from '@solid-primitives/storage';
import * as stylex from '@stylexjs/stylex';
import { type JSX, Match, Switch, createSignal, onMount } from 'solid-js';
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
			<Switch>
				<Match when={theme() === 'light'}>
					<div {...stylex.props(themes.light)}>{props.children}</div>
				</Match>
				<Match when={theme() === 'dark'}>
					<div {...stylex.props(themes.dark)}>{props.children}</div>
				</Match>
			</Switch>
		</ThemeContext.Provider>
	);
};
