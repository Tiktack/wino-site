import type { JSX } from "solid-js";
import type { PostMetadata } from "./blog(list)";
import { useLocation } from "@solidjs/router";
import { TextBlock } from "~/components/core/TextBlock/TextBlock";

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

const BlogLaytout = (props: BlogLaytoutProps) => {
	const location = useLocation();
	const slug = location.pathname.split("/").pop();
	const post = posts.find((post) => post.name === slug);
	return (
		<div
			style={{
				display: "flex",
				"flex-direction": "column",
				"align-items": "center",
				width: "100%",
				"max-width": "800px",
				margin: "0 auto",
				gap: "1rem",
			}}
		>
			<TextBlock
				variant="title"
				style={{
					"view-transition-name": `blog-title-${post?.name}`,
				}}
			>
				{post?.title}
			</TextBlock>
			<div>
				<img
					src={post?.thumbnail}
					alt={post?.title}
					style={{
						"view-transition-name": `blog-image-${post?.name}`,
						width: "750px",
						height: "500px",
						"object-fit": "cover",
						"border-radius": "0.375rem",
					}}
				/>
			</div>
			<div
				style={{
					color: "white",
					"max-width": "none",
				}}
				class="prose prose-invert prose-lg"
			>
				{props.children}
			</div>
		</div>
	);
};

export default BlogLaytout;