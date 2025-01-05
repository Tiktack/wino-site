import { Title } from '@solidjs/meta';
import { A } from '@solidjs/router';

export default function About() {
	return (
		<main>
			<Title>About</Title>

			<h1>About</h1>

			<A
				href="/about"
				class="text-accent hover:underline font-thin uppercase my-16"
			>
				About Page
			</A>
		</main>
	);
}
