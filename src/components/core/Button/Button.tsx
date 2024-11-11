import type { JSX, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import * as ButtonPrimitive from "@kobalte/core/button";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import styles from "./Button.module.css";

const buttonVariants = cva(styles.button, {
	variants: {
		variant: {
			standard: styles.standard,
			accent: styles.accent,
      hyperlink: styles.hyperlink,
		},
    disabled: {
      true: styles.disabled,
      false: ""
    },
	},
  compoundVariants: [
    {
      variant: ["standard"],
      disabled: true,
      class: styles.standardDisabled,
    },
    {
      variant: ["accent"],
      disabled: true,
      class: styles.accentDisabled,
    },
    {
      variant: ["hyperlink"],
      disabled: true,
      class: styles.hyperlinkDisabled,
    },
  ],
	defaultVariants: {
		variant: "standard",
    disabled: false
	},
});

type ButtonProps<T extends ValidComponent = "button"> =
	ButtonPrimitive.ButtonRootProps<T> &
		VariantProps<typeof buttonVariants> & {
			class?: string | undefined;
			children?: JSX.Element;
		};

const Button = <T extends ValidComponent = "button">(
	props: PolymorphicProps<T, ButtonProps<T>>,
) => {
	const [local, others] = splitProps(props as ButtonProps, [
		"variant",
		"class",
		"disabled",
	]);
	return (
		<ButtonPrimitive.Root
			class={buttonVariants({
				variant: local.variant,
				disabled: local.disabled,
				className: local.class,
			})}
			{...others}
		/>
	);
};

export type { ButtonProps };
export { Button, buttonVariants };