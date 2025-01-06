import { useLocation } from '@solidjs/router';
import * as stylex from '@stylexjs/stylex';
import type { JSX } from 'solid-js';
import { TextBlock } from '~/components/core/TextBlock/TextBlock';
import { colors } from '~/shared/theme/tokens.stylex';
import type { PostMetadata } from './blog(list)';

interface BlogLaytoutProps {
	children: JSX.Element;
	metadata: PostMetadata;
}

// Use Vite's glob import to get all MDX files from the routes/posts directory
const postsRaw = import.meta.glob<PostMetadata>('./blog/*.mdx', {
	eager: true,
	import: 'frontmatter',
});
const posts = Object.entries(postsRaw).map(([path, post]) => ({
	...post,
	name: path.replace('./blog/', '').replace('.mdx', ''),
}));

const BlogLayout = (props: BlogLaytoutProps) => {
	const location = useLocation();
	const slug = location.pathname.split('/').pop();
	const post = posts.find((post) => post.name === slug);

	if (!post) {
		return <div>Post not found</div>;
	}

	return (
		<div {...stylex.attrs(styles.container)}>
			<TextBlock
				variant="title"
				style={{
					'view-transition-name': `blog-title-${post?.name}`,
				}}
			>
				{post?.title}
			</TextBlock>
			<div>
				<img
					src={post.thumbnail}
					alt={post.title}
					{...stylex.attrs(styles.image(post.name))}
				/>
			</div>
			<div {...stylex.attrs(styles.content)}>{props.children}</div>
		</div>
	);
};

const styles = stylex.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		maxWidth: '800px',
		margin: '0 auto',
		gap: '1rem',
	},
	content: {
		color: colors.textPrimary,
	},
	image: (slug: string) => ({
		viewTransitionName: `blog-image-${slug}`,
		width: '750px',
		height: '500px',
		objectFit: 'cover',
		borderRadius: '0.375rem',
	}),
});

export default BlogLayout;
