import * as stylex from '@stylexjs/stylex';
import { format } from 'date-fns';
import { DateFormatToken } from '~/shared/lib/date';
import { base, colors } from '~/shared/theme/tokens.stylex';
import { TextBlock } from './core/TextBlock/TextBlock';

interface BlogCardProps {
	title: string;
	description: string;
	thumbnail: string;
	date: string;
	author: string;
	slug: string;
}

export const BlogCard = (props: BlogCardProps) => {
	return (
		<div {...stylex.attrs(styles.container)}>
			<img
				src={props.thumbnail}
				{...stylex.attrs(styles.image(props.slug))}
				alt={props.title}
			/>

			<div {...stylex.attrs(styles.content)}>
				<TextBlock variant="title" style={styles.title(props.slug)}>
					{props.title}
				</TextBlock>
				<TextBlock variant="body" style={styles.description}>
					{props.description}
				</TextBlock>
				<TextBlock style={styles.date}>
					{format(props.date, DateFormatToken.ShortDate)}
				</TextBlock>
			</div>
		</div>
	);
};

const styles = stylex.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'start',
		borderRadius: '0.5rem',
		background: colors.cardBackgroundDefault,
		boxShadow: base.cardShadow,
		transition: 'transform 200ms',
		height: '25rem',
		overflow: 'hidden',
		':hover': {
			transform: 'translateY(-5px)',
			boxShadow: base.cardShadow,
		},
	},
	image: (slug: string) => ({
		viewTransitionName: `blog-image-${slug}`,
		height: '12rem',
		width: '100%',
		objectFit: 'cover',
	}),
	content: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		padding: '1.25rem',
		gap: '0.75rem',
		height: '13rem',
	},
	title: (slug: string) => ({
		viewTransitionName: `blog-title-${slug}`,
		display: '-webkit-box',
		textDecoration: 'none',
		color: colors.textPrimary,
		WebkitLineClamp: 2,
		WebkitBoxOrient: 'vertical',
		overflow: 'hidden',
		height: '2rem',
	}),
	description: {
		color: colors.textTertiary,
		display: '-webkit-box',
		overflow: 'hidden',
		WebkitLineClamp: 5,
		WebkitBoxOrient: 'vertical',
	},
	date: {
		color: colors.textTertiary,
		marginTop: 'auto',
		height: '1.5rem',
	},
});
