import { For, type JSX } from 'solid-js';
import { A, useLocation } from '@solidjs/router';
import styles from "./Navbar.module.css"
import { SiDiscord, SiGithub } from "solid-icons/si";
import { TextBlock } from '~/components/core/TextBlock/TextBlock';
import { IconButton } from '~/components/core/IconButton/IconButton';
import { FiHome } from 'solid-icons/fi'
import { TbNews } from 'solid-icons/tb'
import { IoDocumentTextOutline } from 'solid-icons/io'
import type { IconTypes } from 'solid-icons';

interface Item {
  href: string;
  name: string;
  Icon?: IconTypes;
}

const NAVBAR_ITEMS: Item[] = [
  {
    href: "/",
    name: "Home",
    Icon: FiHome
  },
  {
    href: "/blog",
    name: "Blog",
    Icon: TbNews,
  },
  {
    href: "/docs/overview",
    name: "Documentation",
    Icon: IoDocumentTextOutline,
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
                activeClass='bg-accent-tertiary'
                end
              >
                {item.Icon && <item.Icon class='mr-1' />}
                <TextBlock>{item.name}</TextBlock>
              </A>
            )}
          </For>
        </nav>
        <div class={styles.buttons}>
          <div style={{ display: "flex", "flex-direction": "row" }}>
            <IconButton as={'a'} variant="standard" href='https://discord.com/invite/windows-apps-hub-714581497222398064' target='_blank'>
              <SiDiscord />
            </IconButton>
            <IconButton as={'a'} variant="standard" href='https://github.com/bkaankose/Wino-Mail/' target='_blank'>
              <SiGithub />
            </IconButton>
          </div>
        </div>
      </div>
    </header>
  );
}