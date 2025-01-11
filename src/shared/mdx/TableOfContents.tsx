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
				target: child,
			})),
	);

	const highestLevel = createMemo(() =>
		Math.min(...headings().map((heading) => heading.level)),
	);

	const handleClick = (id: string) => {
		if (id) history.pushState({}, '', `#${id}`);

		window.scrollTo({
			// biome-ignore lint/style/noNonNullAssertion: <explanation>
			top: headings().find((x) => x.id === id)!.target.offsetTop - 50,
			behavior: 'smooth',
		});
	};

	function handleScroll() {
		if (headings)
			setActiveId(
				[...headings()]
					.reverse()
					.find((heading) => heading.target.offsetTop - 100 <= window.scrollY)
					?.id ??
					headings()?.[0].id ??
					'',
			);
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		// Highlight the first heading when the page loads
		handleScroll();

		onCleanup(() => {
			window.addEventListener('scroll', handleScroll);
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
								onClick={() => handleClick(heading.id)}
								style={[styles.item(heading.level - highestLevel() - 1)]}
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
		// maxWidth: '300px',
		maxHeight: 'calc(100vh - 8rem)',
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
