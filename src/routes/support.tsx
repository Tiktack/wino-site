import { Title } from '@solidjs/meta';
import type { RouteSectionProps } from '@solidjs/router';
import MdxLayout from '~/components/layouts/MdxLayout';

export default function SupportLayout(props: RouteSectionProps) {
	return (
		<div>
			<Title>Wino | Privacy</Title>

			<MdxLayout>{props.children}</MdxLayout>
		</div>
	);
}
