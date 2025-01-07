import { Dialog as KDialog } from '@kobalte/core';
import * as stylex from '@stylexjs/stylex';
import { type Component, type JSX, Show } from 'solid-js';
import { base, colors } from '~/shared/theme/tokens.stylex';
import { TextBlock } from '../TextBlock/TextBlock';

interface DialogProps {
	open: boolean;
	title?: string;
	size?: 'standard' | 'max' | 'min';
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
					<div {...stylex.attrs(styles.container(props.darken))}>
						<KDialog.Content
							{...stylex.attrs(
								styles.content,
								sizeVariants[props.size ?? 'standard'],
							)}
						>
							<div {...stylex.attrs(styles.content2)}>
								<Show when={props.title}>
									<TextBlock variant="subtitle" style={styles.title}>
										{props.title}
									</TextBlock>
								</Show>
								{props.children}
							</div>
							<Show when={props.footer}>
								<footer {...stylex.attrs(styles.footer)}>{props.footer}</footer>
							</Show>
						</KDialog.Content>
					</div>
				</KDialog.Portal>
			</KDialog.Root>
		</Show>
	);
};

const sizeVariants = stylex.create({
	min: {
		width: '320px',
	},
	max: {
		width: '540px',
	},
	standard: {
		width: '448px',
	},
});

const styles = stylex.create({
	container: (darken: boolean | undefined) => ({
		position: 'fixed',
		inset: '0',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: '101',
		backgroundColor: darken ? colors.smokeBackgroundDefault : '',
	}),
	content: {
		position: 'fixed',
		maxWidth: 'calc(100% - 24px)',
		borderRadius: base.overlayCornerRadius,
		backgroundColor: colors.solidBackgroundBase,
		backgroundClip: 'padding-box',
		boxShadow: base.dialogShadow,
		border: '1px solid var(--surface-stroke-default)',
		overflow: 'hidden',
	},
	content2: {
		padding: '24px',
		backgroundColor: colors.layerBackgroundDefault,
		color: colors.textPrimary,
	},
	title: {
		display: 'block',
		marginBottom: '12px',
		color: colors.textPrimary,
	},
	footer: {
		padding: '24px',
		display: 'grid',
		gridAutoRows: '1fr',
		gridAutoFlow: 'column',
		gap: '8px',
		borderTop: '1px solid var(--card-stroke-default)',
		whiteSpace: 'nowrap',
	},
});
