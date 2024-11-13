import * as CollapsiblePrimitive from "@kobalte/core/collapsible"
import styles from "./Collapsible.module.css"
import { type ComponentProps, type JSX, splitProps, type ValidComponent } from "solid-js"
import type { PolymorphicProps } from "@kobalte/core"
import cn from "classnames";

const Collapsible = CollapsiblePrimitive.Root

type CollapsibleTriggerProps<T extends ValidComponent = "div"> =
  CollapsiblePrimitive.CollapsibleTriggerProps<T> & {
    class?: string | undefined;
    children?: JSX.Element;
  };

const CollapsibleTrigger = <T extends ValidComponent = "div">(props: PolymorphicProps<T, CollapsibleTriggerProps<T>>) => {
  const [local, others] = splitProps(props as CollapsibleTriggerProps, ['class'])
  return <CollapsiblePrimitive.Trigger class={cn(styles.collapsibleTrigger, local.class)} {...others} />
}

type CollapsibleTriggerIconProps = ComponentProps<'div'>

const CollapsibleTriggerIcon = (props: CollapsibleTriggerIconProps) => {
  const [local, others] = splitProps(props, ['class'])
  return <div class={cn(styles.collapsibleTriggerIcon, local.class)} {...others} />
}

type CollapsibleContentProps<T extends ValidComponent = "div"> =
  CollapsiblePrimitive.CollapsibleContentProps<T> & {
    class?: string | undefined;
    children?: JSX.Element;
  };

const CollapsibleContent = <T extends ValidComponent = "div">(props: PolymorphicProps<T, CollapsibleContentProps<T>>) => {
  const [local, others] = splitProps(props as CollapsibleContentProps, ['class'])
  return <CollapsiblePrimitive.Content class={cn(styles.collapsibleContent, local.class)} {...others} />
}

export { Collapsible, CollapsibleTrigger, CollapsibleTriggerIcon, CollapsibleContent }