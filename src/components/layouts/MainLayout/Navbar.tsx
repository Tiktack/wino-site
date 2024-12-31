import { For } from 'solid-js';
import { A, useLocation } from '@solidjs/router';
import styles from "./Navbar.module.css"
import { TextBlock } from '~/components/core/TextBlock/TextBlock';
import { IconButton } from '~/components/core/IconButton/IconButton';
import FluentIcon from '~/components/FluentIcon';
import Settings24Regular from "@fluentui/svg-icons/icons/settings_24_regular.svg?raw";
import Home24Regular from "@fluentui/svg-icons/icons/home_24_regular.svg?raw";
import News24Regular from "@fluentui/svg-icons/icons/news_24_regular.svg?raw";
import DocumentOnePage24Regular from "@fluentui/svg-icons/icons/document_one_page_24_regular.svg?raw";

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
			<header class={styles.navbar}>
				<div class={styles.navbarInner}>
					<a class={styles.logo} href="/">
						<img src="/logo.png" width="32" height="32" alt="Wino logo" />
						Wino Mail
					</a>
					<nav>
						<For each={NAVBAR_ITEMS}>
							{(item) => (
								<A
									href={item.href}
									// class={isSelected(item.href) ? 'selected' : ''}
									activeClass="bg-accent-tertiary"
									end
								>
									{item.Icon && <FluentIcon icon={item.Icon} />}
									<TextBlock>{item.name}</TextBlock>
								</A>
							)}
						</For>
					</nav>
					<div class={styles.buttons}>
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