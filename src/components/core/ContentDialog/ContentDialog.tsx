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
						style={{
							position: "fixed",
							inset: "0",
							display: "flex",
							"align-items": "center",
							"justify-content": "center",
							"z-index": "101",
							"background-color": props.darken ? "var(--smoke-background-default)" : ""
						}}
					>
						<KDialog.Content
							style={{
								position: "fixed",
								"box-sizing": "border-box",
								"max-width": "calc(100% - 24px)",
								"border-radius": "var(--overlay-corner-radius)",
								"background-color": "var(--solid-background-base)",
								"background-clip": "padding-box",
								"box-shadow": "var(--shadow-dialog)",
								border: "1px solid var(--surface-stroke-default)",
								overflow: "hidden",
								width: props.size === "min" ? "320px" : props.size === "max" ? "540px" : "448px"
							}}
						>
							<div
								style={{
									padding: "24px",
									"background-color": "var(--layer-background-default)",
									color: "var(--text-primary)"
								}}
							>
								<Show when={props.title}>
									<TextBlock
										variant="subtitle"
										style={{
											display: "block",
											"margin-bottom": "12px",
											color: "var(--text-primary)"
										}}
									>
										{props.title}
									</TextBlock>
								</Show>
								{props.children}
							</div>
							<Show when={props.footer}>
								<footer
									style={{
										padding: "24px",
										display: "grid",
										"grid-auto-rows": "1fr",
										"grid-auto-flow": "column",
										gap: "8px",
										"border-top": "1px solid var(--card-stroke-default)",
										"white-space": "nowrap"
									}}
								>
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