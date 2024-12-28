import { A } from "@solidjs/router";
import { format } from "date-fns/format";
import { Button } from "~/components/core/Button/Button";
import { TextBlock } from "~/components/core/TextBlock/TextBlock";

export const Footer = () => {
	return (
		<footer class="bg-[var(--solid-background-base)] p-4 flex justify-around mt-12">
			<div class="flex flex-col gap-y-2">
				<div class="flex items-center gap-x-2">
					<img src="/logo.png" alt="Wino Mail Logo" class="w-8" />
					<TextBlock variant="subtitle">Wino Mail</TextBlock>
				</div>
				<TextBlock
					style={{
						color: "var(--text-tertiary)",
					}}
				>
					Copyright (c) {format(new Date(), "yyyy")} Wino
				</TextBlock>
			</div>
			<div class="flex flex-col gap-y-1">
				<TextBlock
					style={{
						padding: "0.6rem",
						color: "var(--text-tertiary)",
					}}
				>
					Contribute
				</TextBlock>
				<Button
					variant="hyperlink"
					as="a"
					href="https://github.com/bkaankose/Wino-Mail/issues/new/choose"
					target="_blank"
				>
					GitHub Issue
				</Button>
				<Button
					variant="hyperlink"
					as="a"
					href="https://github.com/bkaankose/Wino-Mail/blob/main/CONTRIBUTING.md"
					target="_blank"
				>
					Contribution Guideline
				</Button>
			</div>
			<div class="flex flex-col gap-y-1">
				<TextBlock
					style={{
						padding: "0.6rem",
						color: "var(--text-tertiary)",
					}}
				>
					Support
				</TextBlock>
				<Button
					variant="hyperlink"
					as={A}
					href="/Privacy"
				>
					Privacy
				</Button>
			</div>
		</footer>
	);
};