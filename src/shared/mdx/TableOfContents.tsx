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
import { Button } from '~/components/core/Button/Button';
import { TextBlock } from '~/components/core/TextBlock/TextBlock';
import { colors } from '~/shared/theme/tokens.stylex';

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
							<Button
								variant={'hyperlink'}
								as={'a'}
								href={`#${heading.id}`}
								onClick={(e: { preventDefault: () => void }) => {
									e.preventDefault();
									handleScroll(heading.id);
								}}
								style={[
									styles.item(heading.level - highestLevel()),
									heading.id === activeId() && styles.activeItem,
								]}
							>
								{heading.content}
							</Button>
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
	header: {
		fontSize: '1.3rem',
		fontWeight: '700',
		color: colors.textPrimary,
	},
	navigation: {
		marginTop: '0.5rem',
	},
	list: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'start',
		paddingLeft: 0,
	},
	item: (level: number) => ({
		marginLeft: `${level * 16}px`,
	}),
	activeItem: {
		fontWeight: '600',
		color: colors.textPrimary,
	},
});
