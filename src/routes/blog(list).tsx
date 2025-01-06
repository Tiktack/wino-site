import { Title } from '@solidjs/meta';
import { A, useBeforeLeave } from '@solidjs/router';
import * as stylex from '@stylexjs/stylex';
import { compareDesc, format } from 'date-fns';
import { For } from 'solid-js';
import { BlogCard } from '~/components/BlogCard';
import { Button } from '~/components/core/Button/Button';
import { InfoBadge } from '~/components/core/InfoBadge/InfoBadge';
import { TextBlock } from '~/components/core/TextBlock/TextBlock';
import { DateFormatToken } from '~/shared/lib/date';
import { getBlogPosts } from '~/shared/lib/mdx';
import { resolvePath } from '~/shared/lib/resolvePath';
import { colors } from '~/shared/theme/tokens.stylex';
import { useRouteTransition } from '~/shared/ui/useRouteTransition';

const posts = getBlogPosts()
	.slice()
	.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

export default function BlogList() {
	const mostRecentPost = posts[0];
	const restPosts = posts.slice(1);

	useRouteTransition();

	return (
		<main>
			<Title>Wino | Blog</Title>
			<div {...stylex.props(styles.container)}>
				<div {...stylex.props(styles.heroSection)}>
					<div
						{...stylex.props(styles.heroBackground(mostRecentPost.thumbnail))}
					/>
					<div {...stylex.props(styles.heroContent)}>
						<InfoBadge severity="information">
							{format(new Date(mostRecentPost.date), DateFormatToken.ShortDate)}
						</InfoBadge>

						<TextBlock
							variant="title"
							style={styles.title(mostRecentPost.slug)}
						>
							{mostRecentPost.title}
						</TextBlock>

						<TextBlock variant="body">{mostRecentPost.description}</TextBlock>

						<Button variant={'accent'} as={A} href={mostRecentPost.slug}>
							Read More
						</Button>
					</div>

					<A
						href={mostRecentPost.slug}
						{...stylex.props(styles.imageContainer)}
					>
						<img
							src={resolvePath(mostRecentPost.thumbnail)}
							alt={mostRecentPost.title}
							{...stylex.props(styles.heroImage(mostRecentPost.slug))}
						/>
					</A>
				</div>

				<div {...stylex.props(styles.divider)} />

				<div {...stylex.props(styles.postsGrid)}>
					<For each={restPosts}>
						{(post) => (
							<A href={post.slug} {...stylex.props(styles.postLink)}>
								<BlogCard
									title={post.title}
									description={post.description}
									thumbnail={resolvePath(post.thumbnail)}
									date={format(
										new Date(post.date),
										DateFormatToken.ShortNumericDate,
									)}
									author={post.author}
									slug={post.slug}
								/>
							</A>
						)}
					</For>
				</div>
			</div>
		</main>
	);
}

const styles = stylex.create({
	container: {
		paddingLeft: '1.5rem',
		paddingRight: '1.5rem',
		maxWidth: '1200px',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '100%',
	},
	heroSection: {
		position: 'relative',
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fill,minmax(400px,1fr))',
		gap: '2rem',
		minHeight: '300px',
		paddingTop: '2rem',
	},
	heroBackground: (backgroundImage: string) => ({
		mask: 'linear-gradient(black,transparent 80%)',
		backgroundImage: `url(${resolvePath(backgroundImage)})`,
		height: 'calc(100% + 250px)',
		position: 'absolute',
		width: '100vw',
		left: '50%',
		transform: 'translateX(-50%) translateY(-5%)',
		top: '0',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		opacity: '0.25',
	}),
	heroContent: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		gap: '1rem',
	},
	imageContainer: {
		width: '100%',
		height: '100%',
		overflow: 'hidden',
		borderRadius: '0.375rem',
		position: 'relative',
	},
	title: (postName: string) => ({
		viewTransitionName: `blog-title-${postName}`,
	}),
	heroImage: (postName: string) => ({
		viewTransitionName: `blog-image-${postName}`,
		width: '100%',
		height: '100%',
		objectFit: 'cover',
	}),
	divider: {
		width: '100%',
		height: '1px',
		backgroundColor: colors.textTertiary,
		marginTop: '1.5rem',
		marginBottom: '1.5rem',
	},
	postsGrid: {
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
		gap: '1rem',
	},
	postLink: {
		textDecoration: 'none',
	},
});
