import { Title } from '@solidjs/meta';
import { ProgressBar } from '~/components/core/ProgressBar/ProgressBar';

export default function ProgressBars() {
	return (
		<main>
			<Title>Progress Bar</Title>
			<div
				style={{
					display: 'flex',
					'flex-direction': 'column',
					gap: '1rem',
				}}
			>
				<ProgressBar value={25} />
				<ProgressBar value={50} />
				<ProgressBar value={75} />
				<ProgressBar value={100} />
				<ProgressBar />
			</div>
		</main>
	);
}
