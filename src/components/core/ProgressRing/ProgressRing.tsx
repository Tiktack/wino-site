// ProgressRing.tsx
import { type Component, createSignal, createEffect } from "solid-js";
import styles from "./ProgressRing.module.css";

interface ProgressRingProps {
	value?: number;
	size?: number;
	class?: string;
}

export const ProgressRing: Component<ProgressRingProps> = (props) => {
	let element: SVGSVGElement;
	let circleElement: SVGCircleElement;
	const [circumference, setCircumference] = createSignal(0);

	createEffect(() => {
		if (circleElement) {
			setCircumference(Math.PI * (circleElement.r.baseVal.value * 2));
		}
	});

	const isIndeterminate = () =>
		typeof props.value === "undefined" ||
		props.value === null ||
		Number.isNaN(props.value);

	const normalizedValue = () => {
		if (typeof props.value !== "number") return undefined;
		return Math.max(0, Math.min(100, props.value));
	};

	const strokeDashOffset = () => {
		const value = normalizedValue();
		return value !== undefined
			? ((100 - value) / 100) * circumference()
			: undefined;
	};

	return (
		<svg
			// biome-ignore lint/style/noNonNullAssertion: <explanation>
			ref={element!}
			tabIndex={-1}
			class={`${styles.progressRing} ${props.class || ""}`}
			classList={{
				[styles.indeterminate]: isIndeterminate(),
			}}
			width={props.size || 32}
			height={props.size || 32}
			viewBox="0 0 16 16"
			role={!isIndeterminate() ? "progressbar" : "status"}
			aria-valuemin={!isIndeterminate() ? 0 : undefined}
			aria-valuemax={!isIndeterminate() ? 100 : undefined}
			aria-valuenow={normalizedValue()}
		>
			<circle
				// biome-ignore lint/style/noNonNullAssertion: <explanation>
				ref={circleElement!}
				cx="50%"
				cy="50%"
				r="7"
				stroke-dasharray="3"
				stroke-dashoffset={strokeDashOffset()}
			/>
		</svg>
	);
};