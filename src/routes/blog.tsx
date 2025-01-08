import { useLocation } from '@solidjs/router';
import * as stylex from '@stylexjs/stylex';
import type { JSX } from 'solid-js';
import { TextBlock } from '~/components/core/TextBlock/TextBlock';
import { type PostMetadata, getBlogPosts } from '~/shared/lib/mdx';
import { resolvePath } from '~/shared/lib/resolvePath';
import mdxStyles from '~/shared/theme/mdx.module.css';
import { colors } from '~/shared/theme/tokens.stylex';

const posts = getBlogPosts();

type BlogPostLayoutProps = {
	children: JSX.Element;
	metadata: PostMetadata;
};

export default function BlogPostLayout(props: BlogPostLayoutProps) {
	const location = useLocation();
	const slug = location.pathname.split('/').pop();
	const post = posts.find((post) => post.slug === slug);

	if (!post) {
		return <div>Post not found</div>;
	}

	return (
		<div {...stylex.attrs(styles.container)}>
			<TextBlock variant="title" style={styles.title(post.slug)}>
				{post.title}
			</TextBlock>

			<img
				src={resolvePath(post.thumbnail)}
				alt={post.title}
				{...stylex.attrs(styles.image(post.slug))}
			/>

			<div {...stylex.attrs(styles.content)}>
				<div class={mdxStyles.contentBase}>{props.children}</div>
			</div>
		</div>
	);
}

const styles = stylex.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		maxWidth: '800px',
		margin: '32px auto 0',
		gap: '1rem',
	},
	content: {
		color: colors.textPrimary,
	},
	title: (postName: string) => ({
		viewTransitionName: `blog-title-${postName}`,
	}),
	image: (slug: string) => ({
		viewTransitionName: `blog-image-${slug}`,
		height: 'auto',
		width: '100%',
		objectFit: 'fill',
		borderRadius: '0.375rem',
		marginBottom: '1rem',
	}),
});
