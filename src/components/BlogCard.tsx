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
		<div class="flex flex-col justify-start rounded-lg bg-[var(--system-background-attention)] shadow-md transition-transform duration-200 hover:-translate-y-[5px] hover:shadow-[var(--card-shadow)] h-96 overflow-hidden">
			<img
				src={props.thumbnail}
				alt={props.title}
				style={{
					"view-transition-name": `blog-image-${props.slug}`,
				}}
			/>

			<div class="flex flex-1 flex-col justify-between p-5">
				<div class="flex flex-col gap-y-1">
					<TextBlock
						variant="subtitle"
						style={{
							"view-transition-name": `blog-title-${props.slug}`,
						}}
					>
						{props.title}
					</TextBlock>
					<TextBlock variant="subtitle" class="text-text-tertiary">
						{props.description}
					</TextBlock>
				</div>

				<TextBlock class="text-text-tertiary">
					{format(props.date, DateFormatToken.ShortDate)}
				</TextBlock>
			</div>
		</div>
	);
};