import { For } from "solid-js";
import { A } from "@solidjs/router";
import styles from "./index.module.css";
import { TextBlock } from "~/components/core/TextBlock/TextBlock";

// Use Vite's glob import to get all MDX files from the routes/posts directory
type DocsMetadata = { title: string, description: string, thumbnail: string, date: string, author: string, name: string };
const postsRaw = import.meta.glob<DocsMetadata>("./blog/*.mdx", { eager: true, import: "frontmatter" });
console.log(postsRaw);
const posts = Object.values(postsRaw);
console.log(posts);


const BlogLayout = () => {
	const sortedPosts = posts.toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	const mostRecentPost = sortedPosts[0];
	const restOfPosts = sortedPosts.slice(1);
  
  return (
			<main>
				<h1>Blog Posts</h1>	
				<div class={styles.featureCard}>
								<TextBlock variant="subtitle">{mostRecentPost.title}</TextBlock>
								<TextBlock variant="bodyLarge">{mostRecentPost.description}</TextBlock>
								<TextBlock>{mostRecentPost.date}</TextBlock>
								<TextBlock>{mostRecentPost.author}</TextBlock>
            </div>
				<div
					style={{
						display: "grid",
						width: "100%",
						"grid-template-columns": "repeat(auto-fill, minmax(400px, 1fr))",
						gap: "1rem",
					}}
				>
					<For each={restOfPosts}>
						{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
						{(post: any) => (
              <div class={styles.featureCard}>
											<img src={post.thumbnail} alt={post.title} />
								<TextBlock variant="subtitle">{post.title}</TextBlock>
								<TextBlock variant="bodyLarge">{post.description}</TextBlock>
								<TextBlock>{post.date}</TextBlock>
								<TextBlock>{post.author}</TextBlock>
            </div>
						)}
					</For>
				</div>
			</main>
		);
}

export default BlogLayout;