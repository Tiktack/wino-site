// Dialog.tsx
import { Dialog as KDialog } from "@kobalte/core";
import { type Component, type JSX, Show } from "solid-js";
import { TextBlock } from "../TextBlock/TextBlock";

interface DialogProps {
	open: boolean;
	title?: string;
	size?: "standard" | "max" | "min";
	closable?: boolean;
	darken?: boolean;
	class?: string;
	children: JSX.Element;
	footer?: JSX.Element;
	onClose: () => void;
}

export const ContentDialog: Component<DialogProps> = (props) => {
	return (
		<Show when={props.open}>
			<KDialog.Root
				open={props.open}
				onOpenChange={(isOpen) => !isOpen && props.onClose?.()}
			>
				<KDialog.Portal>
					<div
						class={`fixed inset-0 flex items-center justify-center z-[101] ${
							props.darken ? "bg-[var(--smoke-background-default)]" : ""
						}`}
					>
						<KDialog.Content
							class={`fixed box-border max-w-[calc(100%-24px)] rounded-overlay bg-[var(--solid-background-base)] bg-clip-padding shadow-dialog border border-[var(--surface-stroke-default)] overflow-hidden ${
								props.size === "min"
									? "w-[320px]"
									: props.size === "max"
										? "w-[540px]"
										: "w-[448px]"
							} ${props.class || ""}`}
						>
							<div class="p-6 bg-[var(--layer-background-default)] text-text-primary">
								<Show when={props.title}>
									<TextBlock
										variant="subtitle"
										class="block mb-3 text-text-primary"
									>
										{props.title}
									</TextBlock>
								</Show>
								{props.children}
							</div>
							<Show when={props.footer}>
								<footer class="p-6 grid auto-rows-[1fr] grid-flow-col gap-2 border-t border-[var(--card-stroke-default)] whitespace-nowrap">
									{props.footer}
								</footer>
							</Show>
						</KDialog.Content>
					</div>
				</KDialog.Portal>
			</KDialog.Root>
		</Show>
	);
};