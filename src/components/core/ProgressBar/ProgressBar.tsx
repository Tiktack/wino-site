// ProgressBar.tsx
import type { Component } from 'solid-js';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
	value?: number;
	class?: string;
}

export const ProgressBar: Component<ProgressBarProps> = (props) => {
	let element: SVGSVGElement;
	let railElement: SVGRectElement;
	let trackElement: SVGRectElement;
	let secondaryTrackElement: SVGRectElement;

	return (
		<svg
			class={`${styles.progressBar} ${props.class || ''}`}
			width="100%"
			height="3"
			aria-valuemin={props.value ? 0 : undefined}
			aria-valuemax={props.value ? 100 : undefined}
			aria-valuenow={props.value}
			classList={{
				[styles.indeterminate]: !props.value,
			}}
			// biome-ignore lint/style/noNonNullAssertion: <explanation>
			ref={element!}
		>
			{props.value ? (
				<rect
					// biome-ignore lint/style/noNonNullAssertion: <explanation>
					ref={railElement!}
					height="1"
					rx="0.5"
					y="1"
					width="100%"
					class={styles.progressBarRail}
				/>
			) : (
				<rect
					// biome-ignore lint/style/noNonNullAssertion: <explanation>
					ref={secondaryTrackElement!}
					height="3"
					ry="3"
					class={styles.progressBarTrack}
				/>
			)}
			<rect
				// biome-ignore lint/style/noNonNullAssertion: <explanation>
				ref={trackElement!}
				width={props.value ? `${props.value}%` : undefined}
				height="3"
				rx="1.5"
				class={styles.progressBarTrack}
			/>
		</svg>
	);
};
