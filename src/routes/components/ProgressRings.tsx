import { Title } from '@solidjs/meta';
import { createEffect, createSignal, onCleanup } from 'solid-js';
import { ProgressRing } from '~/components/core/ProgressRing/ProgressRing';

export default function ProgressRings() {
	const [progress, setProgress] = createSignal(0);

	createEffect(() => {
		const timer = setInterval(() => {
			setProgress((p) => (p >= 100 ? 0 : p + 1));
		}, 25);

		onCleanup(() => clearInterval(timer));
	});

	return (
		<main>
			<Title>Progress Ring</Title>
			<div
				style={{
					display: 'flex',
					'flex-direction': 'column',
					gap: '1rem',
				}}
			>
				<ProgressRing />
				<ProgressRing value={25} />
				<ProgressRing value={50} />
				<ProgressRing value={75} />
				<ProgressRing value={100} />
				<ProgressRing size={100} />
				<ProgressRing value={progress()} />
			</div>
		</main>
	);
}
