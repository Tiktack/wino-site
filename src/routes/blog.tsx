import { Meta, Title } from '@solidjs/meta';
import { useLocation } from '@solidjs/router';
import * as stylex from '@stylexjs/stylex';
import type { JSX } from 'solid-js';
import { TextBlock } from '~/components/core/TextBlock/TextBlock';
import MdxLayout from '~/components/layouts/MdxLayout';
import { type PostMetadata, getBlogPosts } from '~/shared/lib/mdx';
import { resolvePath } from '~/shared/lib/resolvePath';

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

	// Get absolute URL for meta tags
	// TODO: Hardcoded for now, replace with your actual domain somehow
	const baseUrl = 'https://winomail.app'; // Replace with your actual domain
	const absoluteImageUrl = `${baseUrl}${resolvePath(post.thumbnail)}`;
	const absoluteUrl = `${baseUrl}/blog/${post.slug}`;

	return (
		<div>
			<Title>Wino | Blog | {post.metaTitle}</Title>

			{/* Add Open Graph meta tags */}
			<Meta property="og:title" content={post.title} />
			<Meta property="og:description" content={post.description} />
			<Meta property="og:image" content={absoluteImageUrl} />
			<Meta property="og:url" content={absoluteUrl} />
			<Meta property="og:type" content="article" />

			{/* Add Twitter Card meta tags */}
			<Meta name="twitter:card" content="summary_large_image" />
			<Meta name="twitter:title" content={post.title} />
			<Meta name="twitter:description" content={post.description} />
			<Meta name="twitter:image" content={absoluteImageUrl} />
			<MdxLayout
				layout={(props: { children: JSX.Element }) => {
					return (
						<div>
							<TextBlock variant="titleLarge" style={styles.title(post.slug)}>
								{post.title}
							</TextBlock>

							<img
								src={resolvePath(post.thumbnail)}
								alt={post.title}
								{...stylex.attrs(styles.image(post.slug))}
							/>
							{props.children}
						</div>
					);
				}}
			>
				{props.children}
			</MdxLayout>
		</div>
	);
}

const styles = stylex.create({
	title: (postName: string) => ({
		viewTransitionName: `blog-title-${postName}`,
		justifyContent: 'center',
		display: 'flex',
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
