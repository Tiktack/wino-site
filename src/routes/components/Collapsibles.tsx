import { Title } from "@solidjs/meta";
import { Collapsible, CollapsibleContent, CollapsibleTrigger, CollapsibleTriggerIcon } from "~/components/core/Collapsible/Collapsible";
import styles from './Collapsibles.module.css';
import { FaSolidChevronDown } from 'solid-icons/fa'

export default function Collapsibles() {
	return (
		<main>
			<Title>Collapsible</Title>
			<div
				style={{
					display: "flex",
					"flex-direction": "row",
					gap: "1rem",
				}}
			>
				<Collapsible class={styles.collapsible}>
					<CollapsibleTrigger class={styles.collapsibleTrigger}>
						Collapsible
						<CollapsibleTriggerIcon style={{ width: '20px', height: '20px' }}>
							<FaSolidChevronDown />
						</CollapsibleTriggerIcon>
					</CollapsibleTrigger>
					<CollapsibleContent class={styles.collapsibleContent}>
						Kobalte is a UI toolkit for building accessible web apps and design systems with SolidJS. It
						provides a set of low-level UI components and primitives which can be the foundation for
						your design system implementation.
					</CollapsibleContent>
				</Collapsible>
			</div>
		</main>
	);
}