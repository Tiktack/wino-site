import { type Accessor, createContext } from 'solid-js';
import { invariant } from '~/shared/lib/invariant';

export type Theme = 'dark' | 'light';

type IThemeContext = {
	theme: Accessor<Theme>;
	toggleTheme: () => void;
};

export const ThemeContext = createContext<IThemeContext>(
	invariant<IThemeContext>('ThemeContext is used outside of its Provider'),
);
