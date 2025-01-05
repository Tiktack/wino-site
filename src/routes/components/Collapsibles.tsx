import ChevronDown24Regular from '@fluentui/svg-icons/icons/chevron_down_24_regular.svg?raw';
import { Title } from '@solidjs/meta';
import { FluentIcon } from '~/components/FluentIcon';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
	CollapsibleTriggerIcon,
} from '~/components/core/Collapsible/Collapsible';

export default function Collapsibles() {
	return (
		<main>
			<Title>Collapsible</Title>
			<div
				style={{
					display: 'flex',
					'flex-direction': 'row',
					gap: '1rem',
				}}
			>
				<Collapsible>
					<CollapsibleTrigger>
						Collapsible
						<CollapsibleTriggerIcon>
							<FluentIcon icon={ChevronDown24Regular} />
						</CollapsibleTriggerIcon>
					</CollapsibleTrigger>
					<CollapsibleContent>
						Kobalte is a UI toolkit for building accessible web apps and design
						systems with SolidJS. It provides a set of low-level UI components
						and primitives which can be the foundation for your design system
						implementation.
					</CollapsibleContent>
				</Collapsible>
			</div>
		</main>
	);
}
