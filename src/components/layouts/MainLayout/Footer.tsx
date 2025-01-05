import { A } from "@solidjs/router";
import { format } from "date-fns/format";
import { Button } from "~/components/core/Button/Button";
import { TextBlock } from "~/components/core/TextBlock/TextBlock";
import * as stylex from "@stylexjs/stylex";
import { base, colors } from "~/shared/theme/tokens.stylex";
import { DateFormatToken } from "~/shared/lib/date";

export const Footer = () => {
	return (
		<footer {...stylex.attrs(styles.container)}>
			<div {...stylex.attrs(styles.column)}>
				<div {...stylex.attrs(styles.logoContainer)}>
					<img
						src="/logo.png"
						{...stylex.attrs(styles.logo)}
						alt="Wino Mail Logo"
					/>

					<TextBlock variant="subtitle">Wino Mail</TextBlock>
				</div>

				<TextBlock {...stylex.attrs(styles.textTertiary)}>
					Copyright (c) {format(new Date(), DateFormatToken.Year)} Wino
				</TextBlock>
			</div>

			<div {...stylex.attrs(styles.smallGapColumn)}>
				<TextBlock {...stylex.attrs(styles.columnText)}>Contribute</TextBlock>

				<Button
					variant="hyperlink"
					as={A}
					href="https://github.com/bkaankose/Wino-Mail/issues/new/choose"
					target="_blank"
				>
					GitHub Issue
				</Button>
				<Button
					variant="hyperlink"
					as={A}
					href="https://github.com/bkaankose/Wino-Mail/blob/main/CONTRIBUTING.md"
					target="_blank"
				>
					Contribution Guideline
				</Button>
			</div>

			<div {...stylex.attrs(styles.smallGapColumn)}>
				<TextBlock {...stylex.attrs(styles.columnText)}>Support</TextBlock>

				<Button variant="hyperlink" as={A} href="/Privacy">
					Privacy
				</Button>
			</div>
		</footer>
	);
};

const styles = stylex.create({
	container: {
		backgroundColor: colors.layerBackgroundDefault,
		display: "flex",
		justifyContent: "space-around",
		width: "100%",
		padding: "1rem 0",
		marginTop: "25px",
		bottom: "0",
	},
	column: {
		display: "flex",
		flexDirection: "column",
		gap: "0.5rem",
	},
	logoContainer: {
		display: "flex",
		alignItems: "center",
		gap: "0.5rem",
	},
	logo: {
		width: "2rem",
	},
	textTertiary: {
		color: colors.textTertiary,
		fontSize: base.bodyFontSize,
	},
	columnText: {
		padding: "0.6rem",
		color: colors.textTertiary,
	},
	smallGapColumn: {
		display: "flex",
		flexDirection: "column",
		gap: "0.25rem",
	},
});
