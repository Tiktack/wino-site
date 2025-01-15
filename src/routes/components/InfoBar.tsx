import { Title } from '@solidjs/meta';
import { Button } from '~/components/core/Button/Button';
import { InfoBadge } from '~/components/core/InfoBadge/InfoBadge';
import { InfoBar } from '~/components/core/InfoBar/InfoBar';

export default function InfoBars() {
	return (
		<main>
			<Title>Info bar</Title>
			<div
				style={{
					display: 'flex',
					'flex-direction': 'column',
					gap: '1rem',
				}}
			>
				<InfoBar severity="information" title="Table of Contents" />
				<InfoBar severity="attention" title="Table of Contents" />
				<InfoBar severity="success" title="Table of Contents" />
				<InfoBar severity="critical" title="Table of Contents" />
				<InfoBar severity="caution" title="Table of Contents" />

				<InfoBar severity="information" title="Table of Contents" closable />
				<InfoBar severity="attention" title="Table of Contents" closable />
				<InfoBar severity="success" title="Table of Contents" closable />
				<InfoBar severity="critical" title="Table of Contents" closable />
				<InfoBar severity="caution" title="Table of Contents" closable />

				<InfoBar severity="caution" title="test">
					Some message
				</InfoBar>
				<InfoBadge severity="information" />
			</div>
		</main>
	);
}
