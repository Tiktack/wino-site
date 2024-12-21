import { For } from "solid-js";
import { A } from "@solidjs/router";
import styles from "./index.module.css";
import { TextBlock } from "~/components/core/TextBlock/TextBlock";
import { Title } from "@solidjs/meta";
import { InfoBadge } from "~/components/core/InfoBadge/InfoBadge";
import { Button } from "~/components/core/Button/Button";

// Use Vite's glob import to get all MDX files from the routes/posts directory
export type PostMetadata = { title: string, description: string, thumbnail: string, date: string, author: string, name: string };
const postsRaw = import.meta.glob<PostMetadata>("./blog/*.mdx", { eager: true, import: "frontmatter" });
console.log(postsRaw);
const posts = Object.entries(postsRaw).map(([path, post]) => ({
	...post,
	name: path.replace('./blog/', '').replace('.mdx', '')
}));
console.log(posts);


const Blog = () => {
	const sortedPosts = posts.toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	const mostRecentPost = sortedPosts[0];
	const restOfPosts = sortedPosts.slice(1);
  
  return (
			<main>
				<Title>Wino | Blog</Title>
				<div
					style={{
						padding: "0 24px",
						"max-width": "1200px",
						margin: "0 auto",
						width: "100%",
					}}
				>
					<div
						style={{
							"margin-top": "25px",
							display: "grid",
							"grid-template-columns": "1fr 1fr",
							gap: "2rem",
							"min-height": "300px",
							padding: "2rem",
						}}
					>
						<div
							style={{
								display: "flex",
								"flex-direction": "column",
								"justify-content": "center",
								gap: "1rem",
							}}
						>
							<InfoBadge
								severity="information"
								style={{ padding: "0.5rem 0.5rem" }}
							>
								{new Date(mostRecentPost.date).toLocaleDateString("en-US", {
									month: "short",
									day: "numeric",
									year: "numeric",
								})}
							</InfoBadge>
							<TextBlock variant="subtitle">{mostRecentPost.title}</TextBlock>
							<TextBlock variant="bodyLarge">
								{mostRecentPost.description}
							</TextBlock>
							<Button
								variant={"accent"}
								as={A}
								href={mostRecentPost.name}
							>
								Read More
							</Button>
						</div>
						<div
							style={{
								width: "100%",
								height: "100%",
								overflow: "hidden",
								"border-radius": "0.5rem",
							}}
						>
							<img
								src={mostRecentPost.thumbnail}
								alt={mostRecentPost.title}
								style={{
									width: "100%",
									height: "100%",
									"object-fit": "cover",
								}}
							/>
						</div>
					</div>
					<div
						style={{
							height: "1px",
							background: "rgba(255, 255, 255, 0.08)",
							margin: "24px 0",
							width: "100%",
						}}
					/>
					<div
						style={{
							display: "grid",
							width: "100%",
							"grid-template-columns": "repeat(auto-fill, minmax(300px, 1fr))",
							gap: "1rem",
						}}
					>
						<For each={restOfPosts}>
							{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
							{(post: any) => (
								<A class={styles.featureCard} href={post.name}>
									<img src={post.thumbnail} alt={post.title} />
									<TextBlock variant="subtitle">{post.title}</TextBlock>
									<TextBlock variant="bodyLarge">{post.description}</TextBlock>
									<TextBlock>{post.date}</TextBlock>
									<TextBlock>{post.author}</TextBlock>
								</A>
							)}
						</For>
					</div>
				</div>
			</main>
		);
}

export default Blog;