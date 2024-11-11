import type { Component, JSX } from 'solid-js';
import styles from './TextBlock.module.css';
import { Dynamic } from 'solid-js/web';

type Variant = "caption" | "body" | "bodyStrong" | "bodyLarge" | "subtitle" | "title" | "titleLarge" | "display";

interface TextBlockProps extends JSX.HTMLAttributes<HTMLElement> {
  variant?: Variant;
  tag?: keyof JSX.IntrinsicElements;
  class?: string;
  ref?: HTMLElement;
}

const variantMap = {
  caption: { tag: 'span', name: 'caption' },
  body: { tag: 'span', name: 'body' },
  bodyStrong: { tag: 'h5', name: 'bodyStrong' },
  bodyLarge: { tag: 'h5', name: 'bodyLarge' },
  subtitle: { tag: 'h4', name: 'subtitle' },
  title: { tag: 'h3', name: 'title' },
  titleLarge: { tag: 'h2', name: 'titleLarge' },
  display: { tag: 'h1', name: 'display' }
} as const;

export const TextBlock: Component<TextBlockProps> = (props) => {
  const variant = () => props.variant || 'body';
  const Tag = props.tag || variantMap[variant()].tag;
  
  return (
    <Dynamic 
      component={Tag}
      class={`${styles.textBlock} ${styles[variantMap[variant()].name]} ${props.class || ''}`}
      ref={props.ref}
      {...props}
    >
      {props.children}
    </Dynamic>
  );
};