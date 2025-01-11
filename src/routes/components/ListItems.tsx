import { Title } from '@solidjs/meta';
import ListItem, { ListItemNew } from '~/components/core/ListItem/ListItem';

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
				<ListItem selected>
					{/* <TbGasStation /> */}
					Selected
				</ListItem>
				<ListItem disabled>
					{/* <TbCar /> */}
					Disabled
				</ListItem>
				<ListItem selected>
					{/* <TbTableOptions /> */}
					Selected Disabled
				</ListItem>
				<ListItemNew>Standard</ListItemNew>
				<ListItemNew selected>Selected</ListItemNew>
				<ListItemNew disabled>Disabled</ListItemNew>
			</div>
		</main>
	);
}
