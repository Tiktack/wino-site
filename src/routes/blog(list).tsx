import { For } from "solid-js";
import { A, useBeforeLeave } from "@solidjs/router";
import styles from "./index.module.css";
import { TextBlock } from "~/components/core/TextBlock/TextBlock";
import { Title } from "@solidjs/meta";
import { InfoBadge } from "~/components/core/InfoBadge/InfoBadge";
import { Button } from "~/components/core/Button/Button";
import {compareDesc, format} from "date-fns";
import { DateFormatToken } from "~/shared/lib/date";

// Use Vite's glob import to get all MDX files from the routes/posts directory
export type PostMetadata = { title: string, description: string, thumbnail: string, date: string, author: string, name: string };
const postsRaw = import.meta.glob<PostMetadata>("./blog/*.mdx", { eager: true, import: "frontmatter" });
const posts = Object.entries(postsRaw).map(([path, post]) => ({
	...post,
	name: path.replace('./blog/', '').replace('.mdx', '')
}));


const Blog = () => {
	const sortedPosts = posts.toSorted((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
	const mostRecentPost = sortedPosts[0];
	const restOfPosts = sortedPosts.slice(1);

	const transition = (fnStartingTheSynchronousTransition: () => void) => {
		// In case the API is not yet supported
		if (!document.startViewTransition) {
				return fnStartingTheSynchronousTransition();
		}

		// Transition the changes in the DOM
		const transition = document.startViewTransition(
				fnStartingTheSynchronousTransition,
		);
};

useBeforeLeave((e) => {
		// Stop the inmediate navigation and DOM change
		if (!e.defaultPrevented) {
				e.preventDefault();

				// Perform the action that triggers a DOM change synchronously
				transition(() => {
						e.retry(true);
				});
		}
});
  
  return (
			<main>
				<Title>Wino | Blog</Title>
				<div class="px-6 max-w-[1200px] mx-auto w-full">
					<div class="relative grid grid-cols-2 gap-8 min-h-[300px] p-8">
						<div
							style={{
								"background-image": `url(${mostRecentPost.thumbnail})`,
								mask: "linear-gradient(black,transparent 80%)",
								height: "calc(100% + 150px)",
							}}
							class={
								"object-cover absolute w-[100vw] left-1/2 -translate-x-1/2 top-0 bg-cover bg-center opacity-25 -z-10"
							}
						/>

						<div class="flex flex-col justify-center gap-4">
							<InfoBadge severity="information">
								{format(
									new Date(mostRecentPost.date),
									DateFormatToken.ShortNumericDate,
								)}
							</InfoBadge>
							<TextBlock
								variant="subtitle"
								style={{
									"view-transition-name": `blog-title-${mostRecentPost.name}`,
								}}
							>
								{mostRecentPost.title}
							</TextBlock>
							<TextBlock variant="bodyLarge">
								{mostRecentPost.description}
							</TextBlock>
							<Button variant={"accent"} as={A} href={mostRecentPost.name}>
								Read More
							</Button>
						</div>
						<div class="w-full h-full overflow-hidden rounded-md relative">
							<img
								src={mostRecentPost.thumbnail}
								alt={mostRecentPost.title}
								class="w-full h-full object-cover"
								style={{
									"view-transition-name": `blog-image-${mostRecentPost.name}`,
								}}
							/>
						</div>
					</div>
					<div class="w-full h-px bg-[rgba(255,255,255,0.08)] my-6" />
					<div class="w-full grid [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] gap-4">
						<For each={restOfPosts}>
							{(post) => (
								<A class={styles.featureCard} href={post.name}>
									<div>
										<img
											src={post.thumbnail}
											alt={post.title}
											style={{
												"view-transition-name": `blog-image-${post.name}`,
											}}
										/>
										<TextBlock
											variant="subtitle"
											style={{
												"view-transition-name": `blog-title-${post.name}`
											}}
										>
											{post.title}
										</TextBlock>
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