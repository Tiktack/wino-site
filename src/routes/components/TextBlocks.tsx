import { Title } from "@solidjs/meta";
import { TextBlock } from "~/components/core/TextBlock/TextBlock";

export default function Buttons() {

	return (
		<main>
			<Title>Text Block</Title>
			<div
				style={{
					display: "flex",
					"flex-direction": "column",
					gap: "1rem",
				}}
			>
				<TextBlock variant="caption">Caption</TextBlock>
        <TextBlock variant="body">Body</TextBlock>
        <TextBlock variant="bodyStrong">Body Strong</TextBlock>
        <TextBlock variant="bodyLarge">Body Large</TextBlock>
        <TextBlock variant="subtitle">Subtitle</TextBlock>
        <TextBlock variant="title">Title</TextBlock>
        <TextBlock variant="titleLarge">Title Large</TextBlock>
        <TextBlock variant="display">Display</TextBlock>
			</div>
		</main>
	);
}