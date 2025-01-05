import type { JSX } from "solid-js";
import type { PostMetadata } from "./blog(list)";
import { useLocation } from "@solidjs/router";
import { TextBlock } from "~/components/core/TextBlock/TextBlock";
import * as stylex from "@stylexjs/stylex";
import { colors } from "~/shared/theme/tokens.stylex";

interface BlogLaytoutProps {
	children: JSX.Element;
	metadata: PostMetadata;
}

// Use Vite's glob import to get all MDX files from the routes/posts directory
const postsRaw = import.meta.glob<PostMetadata>("./blog/*.mdx", {
	eager: true,
	import: "frontmatter",
});
const posts = Object.entries(postsRaw).map(([path, post]) => ({
	...post,
	name: path.replace("./blog/", "").replace(".mdx", ""),
}));

const BlogLayout = (props: BlogLaytoutProps) => {
	const location = useLocation();
	const slug = location.pathname.split("/").pop();
	const post = posts.find((post) => post.name === slug);
	return (
		<div {...stylex.attrs(styles.container)}>
			<TextBlock
				variant="title"
				style={{
					"view-transition-name": `blog-title-${post?.name}`,
				}}
			>
				{post?.title}
			</TextBlock>
			<div>
				{/* biome-ignore lint/a11y/useAltText: <explanation> */}
				<img
					src={post?.thumbnail}
					alt={post?.title}
					// biome-ignore lint/style/noNonNullAssertion: <explanation></explanation>
					{...stylex.attrs(styles.image(post!.name))}
					style={{
						"view-transition-name": `blog-image-${post?.name}`,
					}}
				/>
			</div>
			<div {...stylex.attrs(styles.content)}>{props.children}</div>
		</div>
	);
};

const styles = stylex.create({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		width: "100%",
		maxWidth: "800px",
		margin: "0 auto",
		gap: "1rem",
	},
	content: {
		color: colors.textPrimary,
	},
	image: (slug: string) => ({
		width: "750px",
		height: "500px",
		objectFit: "cover",
		borderRadius: "0.375rem",
	}),
});

export default BlogLayout;
