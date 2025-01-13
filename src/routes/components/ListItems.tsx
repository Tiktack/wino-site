import { Title } from '@solidjs/meta';
import ListItem from '~/components/core/ListItem/ListItem';

export default function ListItems() {
	return (
		<main>
			<Title>List Items</Title>
			<div
				style={{
					display: 'flex',
					'flex-direction': 'column',
					width: '299px',
					height: '1500px',
					gap: '1rem',
				}}
			>
				<ListItem>Standard</ListItem>
				<ListItem selected>Selected</ListItem>
				<ListItem disabled>Disabled</ListItem>
			</div>
		</main>
	);
}
