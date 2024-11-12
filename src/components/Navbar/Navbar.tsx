// Navbar.tsx
import { For, type JSX } from 'solid-js';
import { useLocation } from '@solidjs/router';
import { TextBlock } from '../core/TextBlock/TextBlock';
import styles from "./Navbar.module.css"

interface Item {
  href: string;
  name: string;
  icon?: string;
}

interface NavbarProps {
  items: Item[];
  buttons?: JSX.Element;
}

export default function Navbar(props: NavbarProps) {
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
          <For each={props.items}>
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
          {props.buttons}
        </div>
      </div>
    </header>
  );
}