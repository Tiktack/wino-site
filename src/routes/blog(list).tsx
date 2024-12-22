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
const posts = Object.entries(postsRaw).map(([path, post]) => ({
	...post,
	name: path.replace('./blog/', '').replace('.mdx', '')
}));


const Blog = () => {
	const sortedPosts = posts.toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	const mostRecentPost = sortedPosts[0];
	const restOfPosts = sortedPosts.slice(1);
  
  return (
			<main>
				<Title>Wino | Blog</Title>
				<div class="px-6 max-w-[1200px] mx-auto w-full">
					<div class="mt-[25px] grid grid-cols-2 gap-8 min-h-[300px] p-8">
						<div class="flex flex-col justify-center gap-4">
							<InfoBadge severity="information">
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
							<Button variant={"accent"} as={A} href={mostRecentPost.name}>
								Read More
							</Button>
						</div>
						<div class="w-full h-full overflow-hidden rounded-md">
							<img
								src={mostRecentPost.thumbnail}
								alt={mostRecentPost.title}
								class="w-full h-full object-cover"
							/>
						</div>
					</div>
					<div class="w-full h-px bg-[rgba(255,255,255,0.08)] my-6" />
					<div class="w-full grid [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] gap-4">
						<For each={restOfPosts}>
							{(post: PostMetadata) => (
								<A class={styles.featureCard} href={post.name}>
									<div>
										<img src={post.thumbnail} alt={post.title} />
										<TextBlock variant="subtitle">{post.title}</TextBlock>
										<TextBlock variant="bodyLarge">
											{post.description}
										</TextBlock>
										<TextBlock>{post.date}</TextBlock>
										<TextBlock>{post.author}</TextBlock>
									</div>
								</A>
							)}
						</For>
					</div>
				</div>
			</main>
		);
}

export default Blog;