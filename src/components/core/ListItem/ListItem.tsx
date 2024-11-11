// ListItem.tsx
import { type Component, type JSX, splitProps } from 'solid-js';
import styles from './ListItem.module.css';
// import { TextBlock } from '../TextBlock/TextBlock';

interface ListItemProps extends JSX.HTMLAttributes<HTMLElement> {
  selected?: boolean;
  disabled?: boolean;
  href?: string;
  class?: string;
  ref?: HTMLAnchorElement | HTMLLIElement;
  children?: JSX.Element;
  icon?: JSX.Element;
}

const ListItem: Component<ListItemProps> = (props) => {
  const [local, others] = splitProps(props, [
    'selected',
    'disabled',
    'href',
    'role',
    'class',
    'ref',
    'children',
    'icon'
  ]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      (e.target as HTMLElement).click();
    }
  };

  const baseClass = () => `${styles.listItem} ${local.class || ''} ${props.selected ? styles.selected : ''
  } ${local.disabled ? styles.disabled : ''}`;

  if (local.href && !local.disabled) {
    return (
      <a
        {...others}
        href={local.href}
        class={baseClass()}
        tabIndex={local.disabled ? -1 : 0}
        aria-selected={props.selected}
        onKeyDown={handleKeyDown}
      >
        {local.icon}
        {/* <TextBlock>{local.children}</TextBlock> */}
        {local.children}
      </a>
    );
  }

  return (
    <li
      {...others}
      class={baseClass()}
      tabIndex={local.disabled ? -1 : 0}
      aria-selected={props.selected}
      onKeyDown={handleKeyDown}
    >
      {local.icon}
      {/* <TextBlock>{local.children}</TextBlock> */}
      {local.children}
    </li>
  );
};

export default ListItem;