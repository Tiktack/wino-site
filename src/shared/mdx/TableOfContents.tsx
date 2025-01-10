import * as stylex from '@stylexjs/stylex';
import { type ChildrenReturn, type Component, For, createMemo } from 'solid-js';
import { Button } from '~/components/core/Button/Button';
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

	return (
		<aside {...stylex.attrs(styles.container)}>
			<span {...stylex.attrs(styles.header)}>On this page</span>

			<nav {...stylex.attrs(styles.navigation)}>
				<ul {...stylex.attrs(styles.list)}>
					<For each={headings()}>
						{(heading) => (
							<Button
								variant={'hyperlink'}
								as={'a'}
								href={`#${heading.id}`}
								style={styles.item(heading.level - highestLevel())}
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
		height: '100%',
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
});
