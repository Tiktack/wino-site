import { A } from '@solidjs/router';
import * as stylex from '@stylexjs/stylex';
import { format } from 'date-fns/format';
import { Button } from '~/components/core/Button/Button';
import { TextBlock } from '~/components/core/TextBlock/TextBlock';
import { DateFormatToken } from '~/shared/lib/date';
import { base, colors } from '~/shared/theme/tokens.stylex';
import logo from '../../../../public/logo.png';

export const Footer = () => {
	return (
		<footer {...stylex.attrs(styles.container)}>
			<div {...stylex.attrs(styles.column)}>
				<div {...stylex.attrs(styles.logoContainer)}>
					<img src={logo} {...stylex.attrs(styles.logo)} alt="Wino Mail Logo" />

					<TextBlock variant="title">Wino Mail</TextBlock>
				</div>

				<TextBlock style={styles.textTertiary}>
					Copyright (c) {format(new Date(), DateFormatToken.Year)} Wino
				</TextBlock>
			</div>

			<div {...stylex.attrs(styles.linksColumn)}>
				<div {...stylex.attrs(styles.smallGapColumn)}>
					<TextBlock style={styles.columnTitleText}>Contribute</TextBlock>

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
					<Button
						variant="hyperlink"
						as={A}
						href="https://crowdin.com/project/wino-mail"
						target="_blank"
					>
						Translations
					</Button>
				</div>

				<div {...stylex.attrs(styles.smallGapColumn)}>
					<TextBlock style={styles.columnTitleText}>Support</TextBlock>

					<Button variant="hyperlink" as={A} href="/support/privacy">
						Privacy
					</Button>
					<Button
						variant="hyperlink"
						as={A}
						href="https://github.com/bkaankose/Wino-Mail/tree/main?tab=GPL-3.0-1-ov-file#readme"
						target="_blank"
					>
						Licence
					</Button>
				</div>
			</div>
		</footer>
	);
};

const styles = stylex.create({
	container: {
		backgroundColor: colors.layerBackgroundDefault,
		display: 'flex',
		justifyContent: 'space-between',
		padding: '1rem 3rem',
		width: '100%',
		marginTop: '25px',
		bottom: '0',
	},
	column: {
		display: 'flex',
		flexDirection: 'column',
		gap: '0.5rem',
	},
	logoContainer: {
		display: 'flex',
		alignItems: 'center',
		gap: '0.5rem',
	},
	logo: {
		width: '3rem',
	},
	textTertiary: {
		color: colors.textTertiary,
	},
	columnTitleText: {
		padding: '0.6rem',
		color: colors.textTertiary,
	},
	smallGapColumn: {
		display: 'flex',
		flexDirection: 'column',
		gap: '0.25rem',
	},
	linksColumn: {
		display: 'flex',
		flexDirection: 'row',
		gap: '2rem',
	},
});
