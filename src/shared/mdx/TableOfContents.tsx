import * as stylex from '@stylexjs/stylex';
import {
	type ChildrenReturn,
	type Component,
	For,
	createMemo,
	createSignal,
	onCleanup,
	onMount,
} from 'solid-js';
import { ListItemNew } from '~/components/core/ListItem/ListItem';
import { TextBlock } from '~/components/core/TextBlock/TextBlock';

const isHTMLElement = (node: unknown): node is HTMLElement => {
	return node instanceof HTMLElement;
};

const isHeadingElement = (node: HTMLElement): boolean => {
	return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.localName);
};

type TableOfContentsProps = {
	childrenReturn: ChildrenReturn;
};

export const TableOfContents: Component<TableOfContentsProps> = (props) => {
	const [activeId, setActiveId] = createSignal('');

	const headings = createMemo(() =>
		props.childrenReturn
			.toArray()
			.filter(isHTMLElement)
			.filter(isHeadingElement)
			.map((child) => ({
				level: Number.parseInt(child.localName[1]),
				content: child.innerText,
				id: child.id,
			})),
	);

	const highestLevel = createMemo(() =>
		Math.min(...headings().map((heading) => heading.level)),
	);

	const handleScroll = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			const yOffset = -50; // Adjust this value to match the height of your sticky navbar
			const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
			window.scrollTo({ top: y, behavior: 'smooth' });
		}
	};

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				}
			},
			{
				rootMargin: '-80px 0px -80% 0px',
			},
		);

		for (const heading of headings()) {
			const element = document.getElementById(heading.id);
			if (element) {
				observer.observe(element);
			}
		}

		onCleanup(() => {
			for (const heading of headings()) {
				const element = document.getElementById(heading.id);
				if (element) {
					observer.unobserve(element);
				}
			}
		});
	});

	return (
		<aside {...stylex.attrs(styles.container)}>
			<TextBlock variant="subtitle">On this page</TextBlock>

			<nav {...stylex.attrs(styles.navigation)}>
				<ul {...stylex.attrs(styles.list)}>
					<For each={headings()}>
						{(heading) => (
							<ListItemNew
								onClick={(e: { preventDefault: () => void }) => {
									e.preventDefault();
									handleScroll(heading.id);
								}}
								style={[styles.item(heading.level - highestLevel())]}
								selected={heading.id === activeId()}
							>
								{heading.content}
							</ListItemNew>
						)}
					</For>
				</ul>
			</nav>
		</aside>
	);
};

const styles = stylex.create({
	container: {
		position: 'sticky',
		top: '8rem',
		width: '100%',
		maxWidth: '300px',
		maxHeight: 'calc(100vh - 8rem)',
		overflowY: 'auto',
	},
	navigation: {
		marginTop: '0.5rem',
	},
	list: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'start',
		gap: '2px',
		paddingLeft: 0,
	},
	item: (level: number) => ({
		display: 'inline-block',
		textAlign: 'start',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		marginLeft: `${level * 16 + 10}px`,
		cursor: 'pointer',
	}),
});
