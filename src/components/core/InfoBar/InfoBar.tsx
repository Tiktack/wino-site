import * as stylex from '@stylexjs/stylex';
import {
	type Component,
	type JSX,
	Show,
	children,
	createEffect,
	createSignal,
} from 'solid-js';
import { base, colors } from '~/shared/theme/tokens.stylex';
import { InfoBadge } from '../InfoBadge/InfoBadge';

type Severity =
	| 'information'
	| 'success'
	| 'caution'
	| 'critical'
	| 'attention';

interface InfoBarProps {
	open?: boolean;
	closable?: boolean;
	severity?: Severity;
	title?: string;
	children?: JSX.Element;
	onOpen?: () => void;
	onClose?: () => void;
}

export const InfoBar: Component<InfoBarProps> = (props) => {
	const [isOpen, setIsOpen] = createSignal(props.open ?? true);
	const childrenResolved = children(() => props.children);

	createEffect(() => {
		if (isOpen()) {
			props.onOpen?.();
		} else {
			props.onClose?.();
		}
	});

	return (
		<Show when={isOpen()}>
			<div
				role="alert"
				{...stylex.attrs(
					styles.infoBar,
					severityVariants[props.severity ?? 'information'],
				)}
			>
				<InfoBadge severity={props.severity} />

				<div {...stylex.attrs(styles.content)}>
					{props.title && (
						<h5 {...stylex.attrs(styles.title)}>{props.title}</h5>
					)}

					<Show when={childrenResolved}>
						<p {...stylex.attrs(styles.message)}>{childrenResolved()}</p>
					</Show>
				</div>

				{props.closable && (
					<button
						type="button"
						aria-label="Close"
						onClick={() => setIsOpen(false)}
						{...stylex.attrs(styles.closeButton)}
					>
						<svg
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="12"
							height="12"
							viewBox="0 0 1024 1024"
							{...stylex.attrs(styles.closeIcon)}
						>
							<path
								fill="currentColor"
								d="M512,584.5L87.5,1009C77.5,1019 65.5,1024 51.5,1024C36.8333,1024 24.5833,1019.08 14.75,1009.25C4.91667,999.417 0,987.167 0,972.5C0,958.5 5,946.5 15,936.5L439.5,512L15,87.5C5,77.5 0,65.3334 0,51C0,44 1.33333,37.3334 4,31C6.66667,24.6667 10.3333,19.25 15,14.75C19.6667,10.25 25.1667,6.66669 31.5,4C37.8333,1.33337 44.5,0 51.5,0C65.5,0 77.5,5 87.5,15L512,439.5L936.5,15C946.5,5 958.667,0 973,0C980,0 986.583,1.33337 992.75,4C998.917,6.66669 1004.33,10.3334 1009,15C1013.67,19.6667 1017.33,25.0834 1020,31.25C1022.67,37.4167 1024,44 1024,51C1024,65.3334 1019,77.5 1009,87.5L584.5,512L1009,936.5C1019,946.5 1024,958.5 1024,972.5C1024,979.5 1022.67,986.167 1020,992.5C1017.33,998.833 1013.75,1004.33 1009.25,1009C1004.75,1013.67 999.333,1017.33 993,1020C986.667,1022.67 980,1024 973,1024C958.667,1024 946.5,1019 936.5,1009Z"
							/>
						</svg>
					</button>
				)}
			</div>
		</Show>
	);
};

const styles = stylex.create({
	infoBar: {
		display: 'flex',
		alignItems: 'center',
		position: 'relative',
		minBlockSize: '48px',
		paddingInlineStart: '15px',
		boxSizing: 'border-box',
		userSelect: 'none',
		backgroundClip: 'padding-box',
		fontFamily: base.fontFamilyText,
		border: '1px solid var(--card-stroke-default)',
		borderRadius: base.controlCornerRadius,
	},
	icon: {
		alignSelf: 'flex-start',
		display: 'flex',
		flex: '0 0 auto',
		marginBlockStart: '16px',
	},
	content: {
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		position: 'relative',
		boxSizing: 'border-box',
		flex: '1 1 auto',
		marginInlineStart: '13px',
		marginBlockStart: '7px',
		marginBlockEnd: '7px',
	},
	title: {
		color: colors.textPrimary,
		margin: 0,
		lineHeight: '20px',
		fontSize: base.bodyFontSize,
		fontWeight: 600,
		marginInlineEnd: '12px',
	},
	message: {
		color: colors.textPrimary,
		margin: 0,
		lineHeight: '20px',
		fontSize: base.bodyFontSize,
		fontWeight: 400,
		flex: '1 1 auto',
		marginInlineEnd: '15px',
	},
	closeButton: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'flex-start',
		flex: '0 0 auto',
		border: 'none',
		outline: 'none',
		appearance: 'none',
		inlineSize: '38px',
		blockSize: '38px',
		margin: '4px',
		color: colors.textPrimary,
		borderRadius: base.controlCornerRadius,
		backgroundColor: colors.subtleFillTransparent,
		transition:
			'var(--control-fast-duration) var(--control-fast-out-slow-in-easing)',
		':focus-visible': {
			boxShadow: 'var(--focus-stroke)',
		},
		':hover': {
			backgroundColor: colors.subtleFillSecondary,
		},
		':active': {
			color: colors.textSecondary,
			backgroundColor: colors.subtleFillTertiary,
		},
	},
	closeIcon: {
		inlineSize: '12px',
		blockSize: '12px',
		fill: 'currentColor',
	},
});

const severityVariants = stylex.create({
	attention: {
		backgroundColor: colors.systemBackgroundAttention,
	},
	success: {
		backgroundColor: colors.systemBackgroundSuccess,
	},
	caution: {
		backgroundColor: colors.systemBackgroundCaution,
	},
	critical: {
		backgroundColor: colors.systemBackgroundCritical,
	},
	information: {
		backgroundColor: colors.cardBackgroundSecondary,
	},
});
