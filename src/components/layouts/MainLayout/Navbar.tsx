import { For, useContext } from 'solid-js';
import { A } from '@solidjs/router';
import { TextBlock } from '~/components/core/TextBlock/TextBlock';
import { IconButton } from '~/components/core/IconButton/IconButton';
import { FluentIcon } from '~/components/FluentIcon';
import Settings24Regular from "@fluentui/svg-icons/icons/settings_24_regular.svg?raw";
import Home24Regular from "@fluentui/svg-icons/icons/home_24_regular.svg?raw";
import News24Regular from "@fluentui/svg-icons/icons/news_24_regular.svg?raw";
import DocumentOnePage24Regular from "@fluentui/svg-icons/icons/document_one_page_24_regular.svg?raw";
import WeatherSunny from "@fluentui/svg-icons/icons/weather_sunny_24_regular.svg?raw";
import * as stylex from '@stylexjs/stylex';
import { ThemeContext } from '~/shared/theme/context';
import { base, colors } from '~/shared/theme/tokens.stylex';

type NavItem = {
	href: string;
	name: string;
	Icon?: string;
}

const NAVBAR_ITEMS: NavItem[] = [
	{
		href: "/",
		name: "Home",
		Icon: Home24Regular
	},
	{
		href: "/blog",
		name: "Blog",
		Icon: News24Regular,
	},
	{
		href: "/docs/overview",
		name: "Documentation",
		Icon: DocumentOnePage24Regular,
	},
	{
		href: "/components/buttons",
		name: "Components",
	},
];

export const Navbar = () => {
	const { toggleTheme } = useContext(ThemeContext);

	return (
		<header {...stylex.attrs(styles.navbar)}>
			<div {...stylex.attrs(styles.navbarInner)}>
				<A href="/" {...stylex.attrs(styles.logo)}>
					<img
						src="/logo.png"
						{...stylex.attrs(styles.logoImage)}
						alt="Wino logo"
					/>

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
						as={"a"}
						href="https://discord.com/invite/windows-apps-hub-714581497222398064"
						target="_blank"
					>
						<FluentIcon icon={Settings24Regular} />
					</IconButton>
					<IconButton
						as={"a"}
						href="https://github.com/bkaankose/Wino-Mail"
						target="_blank"
					>
						<FluentIcon icon={Settings24Regular} />
					</IconButton>
					<IconButton onClick={() => toggleTheme()}>
						<FluentIcon icon={WeatherSunny} />
					</IconButton>
				</div>
			</div>
		</header>
	);
}

const styles = stylex.create({
	navbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		position: "fixed",
		transform: "translateY(0.001px)",
		insetBlockStart: "0",
		insetInlineStart: "0",
		zIndex: 1000,
		inlineSize: "100%",
		minBlockSize: "56px",
		boxSizing: "border-box",
		borderBottom: "1px solid var(--surface-stroke-flyout)",
		backgroundColor: colors.layerBackgroundDefault,
		backgroundClip: "padding-box",
		backdropFilter: "blur(60px)",
	},
	navbarInner: {
		display: "flex",
		alignItems: "center",
		inlineSize: "100%",
		maxInlineSize: "1440px",
		paddingInline: "18px 12px",
		margin: "0 auto",
	},
	nav: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		gap: "12px",
		flex: "1 1 auto",
		padding: "0 16px",
	},
	navLink: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: base.controlCornerRadius,
		position: "relative",
		textDecoration: "none",
		color: colors.textPrimary,
		transition:
			"var(--control-fast-duration) var(--control-fast-out-slow-in-easing)",
		padding: "5px 11px",
		columnGap: "4px",
		":hover": {
			backgroundColor: colors.subtleFillSecondary,
		},
		":active": {
			backgroundColor: colors.subtleFillTertiary,
		},
	},
	selectedNav: {
		backgroundColor: colors.subtleFillSecondary,
		color: colors.accentTextPrimary,
	},
	logo: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		textDecoration: "none",
		position: "relative",
	},
	logoImage: {
		marginInlineEnd: "14px",
		width: "auto",
		height: "25px",
	},
	buttons: {
		display: "flex",
		alignItems: "center",
		columnGap: "8px",
		flex: "0 0 auto",
	},
});