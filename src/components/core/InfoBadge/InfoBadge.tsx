import { type Component, type JSX, Show, Switch, Match } from "solid-js";
import styles from "./InfoBadge.module.css";

type Severity = "attention" | "success" | "caution" | "critical" | "information";
interface InfoBadgeProps extends JSX.HTMLAttributes<HTMLSpanElement> {
  severity?: Severity;
  element?: HTMLSpanElement;
}

const svgProps = {
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg"
};

export const InfoBadge: Component<InfoBadgeProps> = (props) => {
  const severity = () => props.severity ?? "attention";

  return (
			<span
				ref={props.element}
				classList={{
					[styles.infoBadge]: true,
					[styles[`severity-${severity()}`]]: true,
				}}
				{...props}
			>
				<Show
					when={props.children}
					fallback={
						<Switch fallback={<></>}>
							<Match when={severity() === "attention"}>
								<svg {...svgProps} viewBox="162 118 701 789">
									<path fill="currentColor" d="M862.5,680C862.5,687.333 ...Z" />
								</svg>
							</Match>
							<Match when={severity() === "success"}>
								<svg {...svgProps} viewBox="118 245 790 577">
									<path
										fill="currentColor"
										d="M117.5,554.5C117.5,547.167 ...Z"
									/>
								</svg>
							</Match>
							<Match when={severity() === "caution"}>
								<svg {...svgProps} viewBox="406 86 213 875">
									<path
										fill="currentColor"
										d="M426.5,512L426.5,170.5C426.5 ...Z"
									/>
								</svg>
							</Match>
							<Match when={severity() === "critical"}>
								<svg {...svgProps} viewBox="172 171 683 683">
									<path
										fill="currentColor"
										d="M512.5,587.5L262.5,838C252.167 ...Z"
									/>
								</svg>
							</Match>
							<Match when={severity() === "information"}>
								<svg {...svgProps} viewBox="406 64 213 875">
									<path
										fill="currentColor"
										d="M405.5,170.5C405.5,156.167 ...Z"
									/>
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