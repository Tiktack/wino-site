import { format } from "date-fns";
import { TextBlock } from "./core/TextBlock/TextBlock";
import { DateFormatToken } from "~/shared/lib/date";

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
		// biome-ignore lint/a11y/useKeyWithMouseEvents: <explanation>
		<div
			style={{
				display: "flex",
				"flex-direction": "column",
				"justify-content": "start",
				"border-radius": "0.5rem",
				background: "var(--system-background-attention)",
				"box-shadow": "0 4px 6px -1px rgb(0 0 0 / 0.1)",
				transition: "transform 200ms",
				height: "24rem",
				overflow: "hidden",
			}}
			onMouseOver={(e) => {
				e.currentTarget.style.transform = "translateY(-5px)";
				e.currentTarget.style.boxShadow = "var(--card-shadow)";
			}}
			onMouseOut={(e) => {
				e.currentTarget.style.transform = "translateY(0)";
				e.currentTarget.style.boxShadow = "0 4px 6px -1px rgb(0 0 0 / 0.1)";
			}}
		>
			<img
				src={props.thumbnail}
				alt={props.title}
				style={{
					"view-transition-name": `blog-image-${props.slug}`,
					height: "12rem",
					width: "100%",
					"object-fit": "cover",
				}}
			/>

			<div
				style={{
					display: "flex",
					flex: "1",
					"flex-direction": "column",
					padding: "1.25rem",
					gap: "0.75rem",
					height: "12rem",
				}}
			>
				<TextBlock
					variant="subtitle"
					style={{
						"view-transition-name": `blog-title-${props.slug}`,
						display: "-webkit-box",
						"-webkit-line-clamp": "2",
						"-webkit-box-orient": "vertical",
						overflow: "hidden",
					}}
				>
					{props.title}
				</TextBlock>
				<TextBlock
					variant="subtitle"
					style={{
						color: "var(--text-tertiary)",
						flex: 1,
						display: "-webkit-box",
						"-webkit-line-clamp": "3",
						"-webkit-box-orient": "vertical",
						overflow: "hidden",
					}}
				>
					{props.description}
				</TextBlock>
				<TextBlock
					style={{
						color: "var(--text-tertiary)",
						"margin-top": "auto",
					}}
				>
					{format(props.date, DateFormatToken.ShortDate)}
				</TextBlock>
			</div>
		</div>
	);
};