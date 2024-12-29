import { For } from "solid-js";
import { A, useBeforeLeave } from "@solidjs/router";
import { TextBlock } from "~/components/core/TextBlock/TextBlock";
import { Title } from "@solidjs/meta";
import { InfoBadge } from "~/components/core/InfoBadge/InfoBadge";
import { Button } from "~/components/core/Button/Button";
import {compareDesc, format} from "date-fns";
import { DateFormatToken } from "~/shared/lib/date";
import { BlogCard } from "~/components/BlogCard";

// Use Vite's glob import to get all MDX files from the routes/posts directory
export type PostMetadata = { title: string, description: string, thumbnail: string, date: string, author: string, name: string };
const postsRaw = import.meta.glob<PostMetadata>("./blog/*.mdx", { eager: true, import: "frontmatter" });
const posts = Object.entries(postsRaw).map(([path, post]) => ({
	...post,
	name: path.replace('./blog/', '').replace('.mdx', '')
}));


const Blog = () => {
	const sortedPosts = posts.toSorted((a, b) =>
		compareDesc(new Date(a.date), new Date(b.date)),
	);
	const mostRecentPost = sortedPosts[0];
	const restOfPosts = sortedPosts.slice(1);

	const transition = (fnStartingTheSynchronousTransition: () => void) => {
		if (!document.startViewTransition) {
			return fnStartingTheSynchronousTransition();
		}

		const transition = document.startViewTransition(
			fnStartingTheSynchronousTransition,
		);
	};

	useBeforeLeave((e) => {
		if (!e.defaultPrevented) {
			e.preventDefault();
			transition(() => {
				e.retry(true);
			});
		}
	});

	return (
		<main>
			<Title>Wino | Blog</Title>
			<div
				style={{
					"padding-left": "1.5rem",
					"padding-right": "1.5rem",
					"max-width": "1200px",
					"margin-left": "auto",
					"margin-right": "auto",
					width: "100%",
				}}
			>
				<div
					style={{
						position: "relative",
						display: "grid",
						"grid-template-columns": "repeat(2, 1fr)",
						gap: "2rem",
						"min-height": "300px",
						padding: "2rem",
					}}
				>
					<div
						style={{
							"background-image": `url(${mostRecentPost.thumbnail})`,
							mask: "linear-gradient(black,transparent 80%)",
							height: "calc(100% + 250px)",
							position: "absolute",
							width: "100vw",
							left: "50%",
							transform: "translateX(-50%) translateY(-5%)",
							top: "0",
							"background-size": "cover",
							"background-position": "center",
							opacity: "0.25",
							"z-index": "-10",
						}}
					/>

					<div
						style={{
							display: "flex",
							"flex-direction": "column",
							"justify-content": "center",
							gap: "1rem",
						}}
					>
						<InfoBadge severity="information">
							{format(new Date(mostRecentPost.date), DateFormatToken.ShortDate)}
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
					<div
						style={{
							width: "100%",
							height: "100%",
							overflow: "hidden",
							"border-radius": "0.375rem",
							position: "relative",
						}}
					>
						<img
							src={mostRecentPost.thumbnail}
							alt={mostRecentPost.title}
							style={{
								width: "100%",
								height: "100%",
								"object-fit": "cover",
								"view-transition-name": `blog-image-${mostRecentPost.name}`,
							}}
						/>
					</div>
				</div>
				<div
					style={{
						width: "100%",
						height: "1px",
						"background-color": "rgba(255,255,255,0.08)",
						"margin-top": "1.5rem",
						"margin-bottom": "1.5rem",
					}}
				/>
				<div
					style={{
						width: "100%",
						display: "grid",
						"grid-template-columns": "repeat(auto-fill,minmax(300px,1fr))",
						gap: "1rem",
					}}
				>
					<For each={restOfPosts}>
						{(post) => (
							<A href={post.name}>
								<BlogCard
									title={post.title}
									description={post.description}
									thumbnail={post.thumbnail}
									date={format(
										new Date(post.date),
										DateFormatToken.ShortNumericDate,
									)}
									author={post.author}
									slug={post.name}
								/>
							</A>
						)}
					</For>
				</div>
			</div>
		</main>
	);
}

export default Blog;