import { Title } from '@solidjs/meta';
import { Checkbox } from '~/components/core/Checkbox/Checkbox';

export default function Checkboxes() {
	return (
		<main>
			<Title>Checkboxes</Title>
			<div
				style={{
					display: 'flex',
					'flex-direction': 'row',
					gap: '1rem',
				}}
			>
				<Checkbox />
				<Checkbox disabled />
			</div>
		</main>
	);
}
