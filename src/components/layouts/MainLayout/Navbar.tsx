import { For, type JSX } from 'solid-js';
import { useLocation } from '@solidjs/router';
import styles from "./Navbar.module.css"
import { SiDiscord, SiGithub } from "solid-icons/si";
import { TextBlock } from '~/components/core/TextBlock/TextBlock';
import { IconButton } from '~/components/core/IconButton/IconButton';

interface Item {
  href: string;
  name: string;
  icon?: string;
}

const NAVBAR_ITEMS: Item[] = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/blog",
    name: "Blog",
  },
  {
    href: "/docs/overview",
    name: "Documentation",
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
              <a
                href={item.href}
                class={isSelected(item.href) ? 'selected' : ''}
              >
                {item.icon && <div innerHTML={item.icon} />}
                <TextBlock>{item.name}</TextBlock>
              </a>
            )}
          </For>
        </nav>
        <div class={styles.buttons}>
          <div style={{ display: "flex", "flex-direction": "row" }}>
            <IconButton variant="standard">
              <SiDiscord />
            </IconButton>
            <IconButton variant="standard" disabled>
              <SiGithub />
            </IconButton>
          </div>
        </div>
      </div>
    </header>
  );
}