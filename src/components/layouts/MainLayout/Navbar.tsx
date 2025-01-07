import DocumentOnePage24Regular from '@fluentui/svg-icons/icons/document_one_page_24_regular.svg?raw';
import Home24Regular from '@fluentui/svg-icons/icons/home_24_regular.svg?raw';
import News24Regular from '@fluentui/svg-icons/icons/news_24_regular.svg?raw';
import WeatherMoon from '@fluentui/svg-icons/icons/weather_moon_24_regular.svg?raw';
import WeatherSunny from '@fluentui/svg-icons/icons/weather_sunny_24_regular.svg?raw';
import { A } from '@solidjs/router';
import * as stylex from '@stylexjs/stylex';
import { For, Match, Switch, useContext } from 'solid-js';
import { FluentIcon } from '~/components/FluentIcon';
import { IconButton } from '~/components/core/IconButton/IconButton';
import { TextBlock } from '~/components/core/TextBlock/TextBlock';
import { ThemeContext } from '~/shared/theme/context';
import { base, colors } from '~/shared/theme/tokens.stylex';
import dicordLogo from '../../../../public/discord-logo.svg?raw';
import githubLogo from '../../../../public/github-logo.svg?raw';
import logo from '../../../../public/logo.png';

type NavItem = {
	href: string;
	name: string;
	Icon?: string;
};

const NAVBAR_ITEMS: NavItem[] = [
	{
		href: '/',
		name: 'Home',
		Icon: Home24Regular,
	},
	{
		href: '/blog',
		name: 'Blog',
		Icon: News24Regular,
	},
	{
		href: '/docs/overview',
		name: 'Documentation',
		Icon: DocumentOnePage24Regular,
	},
	...(import.meta.env.DEV
		? [
				{
					href: '/components/buttons',
					name: 'Components',
				},
			]
		: []),
];

export const Navbar = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<header {...stylex.attrs(styles.navbar)}>
			<div {...stylex.attrs(styles.navbarInner)}>
				<A href="/" {...stylex.attrs(styles.logo)}>
					<img src={logo} {...stylex.attrs(styles.logoImage)} alt="Wino logo" />

					<TextBlock variant="subtitle">Wino Mail</TextBlock>
				</A>

				<nav {...stylex.attrs(styles.nav)}>
					<For each={NAVBAR_ITEMS}>
						{(item) => (
							<A
								href={item.href}
								end
								activeClass={stylex.attrs(styles.selectedNav).class}
								{...stylex.attrs(styles.navLink)}
							>
								{item.Icon && <FluentIcon icon={item.Icon} />}

								<TextBlock variant="body">{item.name}</TextBlock>
							</A>
						)}
					</For>
				</nav>
				<div {...stylex.attrs(styles.buttons)}>
					<IconButton
						as={'a'}
						href="https://discord.com/invite/windows-apps-hub-714581497222398064"
						target="_blank"
					>
						<FluentIcon icon={dicordLogo} />
					</IconButton>
					<IconButton
						as={'a'}
						href="https://github.com/bkaankose/Wino-Mail"
						target="_blank"
					>
						<FluentIcon icon={githubLogo} />
					</IconButton>
					<IconButton onClick={() => toggleTheme()}>
						<Switch>
							<Match when={theme() === 'light'}>
								<FluentIcon icon={WeatherMoon} />
							</Match>
							<Match when={theme() === 'dark'}>
								<FluentIcon icon={WeatherSunny} />
							</Match>
						</Switch>
					</IconButton>
				</div>
			</div>
		</header>
	);
};

const styles = stylex.create({
	navbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'fixed',
		transform: 'translateY(0.001px)',
		insetBlockStart: '0',
		insetInlineStart: '0',
		zIndex: 1000,
		inlineSize: '100%',
		minBlockSize: '56px',
		boxSizing: 'border-box',
		borderBottom: '1px solid var(--surface-stroke-flyout)',
		backgroundColor: colors.layerBackgroundDefault,
		backgroundClip: 'padding-box',
		backdropFilter: 'blur(60px)',
	},
	navbarInner: {
		display: 'flex',
		alignItems: 'center',
		inlineSize: '100%',
		paddingInline: '18px 12px',
		margin: '0 auto',
	},
	nav: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		gap: '12px',
		flex: '1 1 auto',
		padding: '0 16px',
	},
	navLink: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: base.controlCornerRadius,
		position: 'relative',
		textDecoration: 'none',
		color: colors.textPrimary,
		transition:
			'var(--control-fast-duration) var(--control-fast-out-slow-in-easing)',
		padding: '5px 11px',
		columnGap: '4px',
		':hover': {
			backgroundColor: colors.subtleFillSecondary,
		},
		':active': {
			backgroundColor: colors.subtleFillTertiary,
		},
	},
	selectedNav: {
		backgroundColor: colors.subtleFillSecondary,
		color: colors.accentTextPrimary,
	},
	logo: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textDecoration: 'none',
		position: 'relative',
	},
	logoImage: {
		marginInlineEnd: '14px',
		width: 'auto',
		height: '25px',
	},
	buttons: {
		display: 'flex',
		alignItems: 'center',
		columnGap: '8px',
		flex: '0 0 auto',
	},
});
