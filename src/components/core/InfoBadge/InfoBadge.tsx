import * as stylex from '@stylexjs/stylex';
import { type Component, type JSX, Match, Show, Switch } from 'solid-js';
import { base, colors } from '~/shared/theme/tokens.stylex';

interface InfoBadgeProps extends JSX.HTMLAttributes<HTMLSpanElement> {
	severity?: 'attention' | 'success' | 'caution' | 'critical' | 'information';
}

export const InfoBadge: Component<InfoBadgeProps> = (props) => {
	const severity = () => props.severity ?? 'attention';

	const svgProps: JSX.SvgSVGAttributes<SVGSVGElement> = {
		'aria-hidden': true,
		xmlns: 'http://www.w3.org/2000/svg',
		...stylex.attrs(styles.infoBadgeSvg),
	};

	return (
		<span
			{...stylex.attrs(styles.infoBadge, severityVariants[severity()])}
			{...props}
		>
			<Show
				when={props.children}
				fallback={
					<Switch>
						<Match when={severity() === 'attention'}>
							<svg {...svgProps} viewBox="162 118 701 789">
								<path fill="currentColor" d="M862.5,680C862.5,687.333 ...Z" />
							</svg>
						</Match>
						<Match when={severity() === 'success'}>
							<svg {...svgProps} viewBox="118 245 790 577">
								<path fill="currentColor" d="M117.5,554.5C117.5,547.167 ...Z" />
							</svg>
						</Match>
						<Match when={severity() === 'caution'}>
							<svg {...svgProps} viewBox="406 86 213 875">
								<path
									fill="currentColor"
									d="M426.5,512L426.5,170.5C426.5 ...Z"
								/>
							</svg>
						</Match>
						<Match when={severity() === 'critical'}>
							<svg {...svgProps} viewBox="172 171 683 683">
								<path
									fill="currentColor"
									d="M512.5,587.5L262.5,838C252.167 ...Z"
								/>
							</svg>
						</Match>
						<Match when={severity() === 'information'}>
							<svg {...svgProps} viewBox="406 64 213 875">
								<path fill="currentColor" d="M405.5,170.5C405.5,156.167 ...Z" />
							</svg>
						</Match>
					</Switch>
				}
			>
				{props.children}
			</Show>
		</span>
	);
};

const styles = stylex.create({
	infoBadge: {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxSizing: 'border-box',
		userSelect: 'none',
		minInlineSize: '16px',
		minBlockSize: '16px',
		borderRadius: '16px',
		padding: '5px 10px',
		width: 'fit-content',
		color: colors.textOnAccentPrimary,
		lineHeight: base.captionFontSize,
		fontFamily: 'var(--font-family-small)',
		fontSize: base.captionFontSize,
	},
	infoBadgeSvg: {
		inlineSize: '8px',
		blockSize: '8px',
		fill: 'currentColor',
	},
});

const severityVariants = stylex.create({
	attention: {
		backgroundColor: colors.systemAttention,
	},
	success: {
		backgroundColor: colors.systemSuccess,
	},
	caution: {
		backgroundColor: colors.systemCaution,
	},
	critical: {
		backgroundColor: colors.systemCritical,
	},
	information: {
		backgroundColor: colors.systemSolidNeutral,
	},
});
