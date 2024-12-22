import { type Component, type JSX, Show, Switch, Match } from "solid-js";

type Severity =
	| "attention"
	| "success"
	| "caution"
	| "critical"
	| "information";
interface InfoBadgeProps extends JSX.HTMLAttributes<HTMLSpanElement> {
	severity?: Severity;
	element?: HTMLSpanElement;
}

const svgProps = {
	"aria-hidden": true,
	xmlns: "http://www.w3.org/2000/svg",
};

export const InfoBadge: Component<InfoBadgeProps> = (props) => {
	const severity = () => props.severity ?? "attention";

	return (
		<span
			ref={props.element}
			class={`inline-flex w-fit items-center justify-center px-2 py-1 text-sm rounded-3xl
      ${
				severity() === "attention"
					? "bg-system-attention text-text-primary"
					: severity() === "success"
						? "bg-system-success text-text-primary"
						: severity() === "caution"
							? "bg-system-caution text-text-primary"
							: severity() === "critical"
								? "bg-system-critical text-text-primary"
								: severity() === "information"
									? "bg-system-neutral text-text-primary"
									: ""
			}`}
			{...props}
		>
			<Show
				when={props.children}
				fallback={
					// biome-ignore lint/complexity/noUselessFragments: <explanation>
					<Switch fallback={<></>}>
						<Match when={severity() === "attention"}>
							<svg {...svgProps} class="w-4 h-4" viewBox="162 118 701 789">
								<path fill="currentColor" d="M862.5,680C862.5,687.333 ...Z" />
							</svg>
						</Match>
						<Match when={severity() === "success"}>
							<svg {...svgProps} class="w-4 h-4" viewBox="118 245 790 577">
								<path fill="currentColor" d="M117.5,554.5C117.5,547.167 ...Z" />
							</svg>
						</Match>
						<Match when={severity() === "caution"}>
							<svg {...svgProps} class="w-4 h-4" viewBox="406 86 213 875">
								<path
									fill="currentColor"
									d="M426.5,512L426.5,170.5C426.5 ...Z"
								/>
							</svg>
						</Match>
						<Match when={severity() === "critical"}>
							<svg {...svgProps} class="w-4 h-4" viewBox="172 171 683 683">
								<path
									fill="currentColor"
									d="M512.5,587.5L262.5,838C252.167 ...Z"
								/>
							</svg>
						</Match>
						<Match when={severity() === "information"}>
							<svg {...svgProps} class="w-4 h-4" viewBox="406 64 213 875">
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