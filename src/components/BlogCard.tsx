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
				}}
			/>

			<div
				style={{
					display: "flex",
					flex: "1",
					"flex-direction": "column",
					"justify-content": "space-between",
					padding: "1.25rem",
				}}
			>
				<div
					style={{
						display: "flex",
						"flex-direction": "column",
						gap: "0.25rem",
					}}
				>
					<TextBlock
						variant="subtitle"
						style={{
							"view-transition-name": `blog-title-${props.slug}`,
						}}
					>
						{props.title}
					</TextBlock>
					<TextBlock
						variant="subtitle"
						style={{ color: "var(--text-tertiary)" }}
					>
						{props.description}
					</TextBlock>
				</div>

				<TextBlock style={{ color: "var(--text-tertiary)" }}>
					{format(props.date, DateFormatToken.ShortDate)}
				</TextBlock>
			</div>
		</div>
	);
};