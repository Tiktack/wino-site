import { format } from "date-fns";
import { TextBlock } from "./core/TextBlock/TextBlock";
import { DateFormatToken } from "~/shared/lib/date";
import stylex from '@stylexjs/stylex';
import { colors } from "~/shared/theme/tokens.stylex";

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
				<TextBlock
					variant="subtitle"
					{...stylex.attrs(styles.title(props.slug))}
				>
					{props.title}
				</TextBlock>
				<TextBlock
					variant="body"
					{...stylex.attrs(styles.description)}
				>
					{props.description}
				</TextBlock>
				<TextBlock {...stylex.attrs(styles.date)}>
					{format(props.date, DateFormatToken.ShortDate)}
				</TextBlock>
			</div>
		</div>
	);
};

const styles = stylex.create({
	container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "start",
		borderRadius: "0.5rem",
		background: colors.systemBackgroundAttention,
		boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
		transition: "transform 200ms",
		height: "25rem",
		overflow: "hidden",
		':hover': {
			transform: "translateY(-5px)",
			boxShadow: "var(--card-shadow)",
		}
	},
	image: (slug: string) => ({
		viewTransitionName: `blog-image-${slug}`,
		height: "12rem",
		width: "100%",
		objectFit: "cover",
	}),
	content: {
		display: "flex",
		flex: 1,
		flexDirection: "column",
		padding: "1.25rem",
		gap: "0.75rem",
		height: "12rem",
	},
	title: (slug: string) => ({
		viewTransitionName: `blog-title-${slug}`,
		display: "-webkit-box",
		textDecoration: "none",	
		color: colors.textPrimary,
		WebkitLineClamp: 2,
		WebkitBoxOrient: "vertical",
		overflow: "hidden",
	}),
	description: {
		color: colors.textTertiary,
		flex: 1,
		display: "-webkit-box",
		WebkitBoxOrient: "vertical",
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "wrap",
	},
	date: {
		color: colors.textTertiary,
		marginTop: "auto",
	},
});