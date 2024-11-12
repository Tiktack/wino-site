import type { JSX, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import * as ButtonPrimitive from "@kobalte/core/button";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import styles from "./IconButton.module.css";

const IconButtonVariants = cva(styles.button, {
	variants: {
		variant: {
			standard: styles.iconButton,
			accent: styles.iconButton,
		},
		disabled: {
			true: styles.iconButton,
			false: "",
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
		}
	],
	defaultVariants: {
		variant: "standard",
		disabled: false,
	},
});

type IconButtonProps<T extends ValidComponent = "button"> =
	ButtonPrimitive.ButtonRootProps<T> &
		VariantProps<typeof IconButtonVariants> & {
			class?: string | undefined;
			children?: JSX.Element;
		};

const IconButton = <T extends ValidComponent = "button">(
	props: PolymorphicProps<T, IconButtonProps<T>>,
) => {
	const [local, others] = splitProps(props as IconButtonProps, [
    "children",
		"variant",
		"class",
		"disabled",
	]);
	return (
		<ButtonPrimitive.Root
			class={IconButtonVariants({
				variant: local.variant,
				disabled: local.disabled,
				className: local.class,
			})}
			{...others}
		>
      {local.children}
    </ButtonPrimitive.Root>
	);
};

export type { IconButtonProps };
export { IconButton, IconButtonVariants };