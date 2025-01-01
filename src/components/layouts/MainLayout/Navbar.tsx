import { For } from 'solid-js';
import { A, useLocation } from '@solidjs/router';
import { TextBlock } from '~/components/core/TextBlock/TextBlock';
import { IconButton } from '~/components/core/IconButton/IconButton';
import FluentIcon from '~/components/FluentIcon';
import Settings24Regular from "@fluentui/svg-icons/icons/settings_24_regular.svg?raw";
import Home24Regular from "@fluentui/svg-icons/icons/home_24_regular.svg?raw";
import News24Regular from "@fluentui/svg-icons/icons/news_24_regular.svg?raw";
import DocumentOnePage24Regular from "@fluentui/svg-icons/icons/document_one_page_24_regular.svg?raw";
import * as stylex from '@stylexjs/stylex';

interface Item {
	href: string;
	name: string;
	Icon?: string;
}

const NAVBAR_ITEMS: Item[] = [
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
	const location = useLocation();

	const isSelected = (href: string) => {
		const pathname = location.pathname;
		return (
			pathname === href ||
			(pathname.split('/').length > 1 &&
				href.split('/').length > 1 &&
				pathname.startsWith(href) &&
				!(href === '' || href === '/')) ||
			(href === '/' && pathname === '')
		);
	};

	return (
		<header {...stylex.attrs(styles.navbar)}>
			<div {...stylex.attrs(styles.navbarInner)}>
				<a href="/" {...stylex.attrs(styles.logo)}>
					<img src="/logo.png" {...stylex.attrs(styles.logoImage)} alt="Wino logo" />
					Wino Mail
				</a>

				<nav {...stylex.attrs(styles.nav)}>
					<For each={NAVBAR_ITEMS}>
						{(item) => (
							<A
								href={item.href}
								activeClass="bg-accent-tertiary"
								end
								{...stylex.attrs(styles.navLink, isSelected(item.href) && styles.selectedNav)}
							>
								{item.Icon && <FluentIcon icon={item.Icon} />}
								<TextBlock>{item.name}</TextBlock>
							</A>
						)}
					</For>
				</nav>
				<div {...stylex.attrs(styles.buttons)}>
					<div style={{ display: "flex", "flex-direction": "row" }}>
						<IconButton
							as={"a"}
							variant="standard"
							href="https://discord.com/invite/windows-apps-hub-714581497222398064"
							target="_blank"
						>
							<FluentIcon icon={Settings24Regular} />
						</IconButton>
						<IconButton
							as={"a"}
							variant="standard"
							href="https://github.com/bkaankose/Wino-Mail/"
							target="_blank"
						>
							<FluentIcon icon={Settings24Regular} />
						</IconButton>
					</div>
				</div>
			</div>
		</header>
	);
}

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
		backgroundColor: 'var(--layer-background-default)',
		backgroundClip: 'padding-box',
		backdropFilter: 'blur(60px)'
	},
	navbarInner: {
		display: 'flex',
		alignItems: 'center',
		inlineSize: '100%',
		maxInlineSize: '1440px',
		paddingInline: '18px 12px',
		margin: '0 auto'
	},
	nav: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		gap: '12px',
		flex: '1 1 auto',
		padding: '0 16px'
	},
	navLink: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 'var(--control-corner-radius)',
		position: 'relative',
		textDecoration: 'none',
		color: 'var(--text-primary)',
		transition: 'var(--control-fast-duration) var(--control-fast-out-slow-in-easing)',
		padding: '5px 11px',
		':hover': {
			backgroundColor: 'var(--subtle-fill-secondary)'
		},
		':active': {
			backgroundColor: 'var(--subtle-fill-tertiary)'
		}
	},
	selectedNav: {
		backgroundColor: 'var(--subtle-fill-secondary)',
		color: 'var(--accent-text-primary)'
	},
	logo: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textDecoration: 'none',
		position: 'relative',
		color: 'var(--text-primary)',
		transition: 'var(--control-fast-duration) var(--control-fast-out-slow-in-easing)',
		fontFamily: 'var(--fds-font-family-display)',
		fontSize: '20px',
		fontWeight: 600,
		flex: '0 0 auto',
		':hover': {
			color: 'var(--text-secondary)'
		}
	},
	logoImage: {
		marginInlineEnd: '14px',
		width: 'auto',
		height: '25px'
	},
	buttons: {
		display: 'flex',
		alignItems: 'center',
		gap: '8px',
		flex: '0 0 auto'
	}
});