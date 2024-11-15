// Dialog.tsx
import { Dialog as KDialog } from "@kobalte/core";
import { type Component, type JSX, Show, createEffect } from "solid-js";
import { Portal } from "solid-js/web";
import styles from "./ContentDialog.module.css";
import { TextBlock } from "../TextBlock/TextBlock";

interface DialogProps {
	open?: boolean;
	title?: string;
	size?: "standard" | "max" | "min";
	closable?: boolean;
	darken?: boolean;
	class?: string;
	children?: JSX.Element;
	footer?: JSX.Element;
	onClose?: () => void;
	onBackdropClick?: (e: MouseEvent) => void;
}

export const ContentDialog: Component<DialogProps> = (props) => {
	createEffect(() => {
		if (!props.open) {
			props.onClose?.();
		}
	});

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === "Escape" && props.open && props.closable) {
			props.onClose?.();
		}
	};

	return (
		<Show when={props.open}>
			<KDialog.Root
				open={props.open}
				onOpenChange={(isOpen) => !isOpen && props.onClose?.()}
			>
				<KDialog.Portal>
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<div
						class={styles.backdrop}
						classList={{ [styles.darken]: props.darken }}
						onClick={props.onBackdropClick}
					>
						<KDialog.Content
							class={`${styles.dialog} ${styles[`size${props.size || "standard"}`]} ${props.class || ""}`}
							onKeyDown={handleKeyDown}
						>
							<div class={styles.body}>
								<Show when={props.title}>
									<TextBlock variant="subtitle" class={styles.title}>
										{props.title}
									</TextBlock>
								</Show>
								{props.children}
							</div>
							<Show when={props.footer}>
								<footer class={styles.footer}>{props.footer}</footer>
							</Show>
						</KDialog.Content>
					</div>
				</KDialog.Portal>
			</KDialog.Root>
		</Show>
	);
};