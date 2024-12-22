import { children, type JSX } from "solid-js";
import type { PostMetadata } from "./blog(list)";
import { useLocation, useParams } from "@solidjs/router";
import { TextBlock } from "~/components/core/TextBlock/TextBlock";

interface BlogLaytoutProps {
  children: JSX.Element;
  metadata: PostMetadata;
}

// Use Vite's glob import to get all MDX files from the routes/posts directory
const postsRaw = import.meta.glob<PostMetadata>("./blog/*.mdx", { eager: true, import: "frontmatter" });
const posts = Object.entries(postsRaw).map(([path, post]) => ({
	...post,
	name: path.replace('./blog/', '').replace('.mdx', '')
}));

const BlogLaytout = (props: BlogLaytoutProps) => {
  const location = useLocation();
  const slug = location.pathname.split("/").pop();
  const post = posts.find((post) => post.name === slug);
  return (
			<div class="flex flex-col items-center w-full max-w-[800px] mx-auto gap-4">
				<TextBlock variant="title">{post?.title}</TextBlock>
				<div>
					<img
						src={post?.thumbnail}
						alt={post?.title}
						style={{ "view-transition-name": `blog-image-${post?.name}` }}
						class="w-[750px] h-[500px] object-cover rounded-md"
					/>
				</div>
				<div class="text-white prose prose-invert prose-lg max-w-none">
					{props.children}
				</div>
			</div>
		);
}

export default BlogLaytout;