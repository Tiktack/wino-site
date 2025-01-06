import { useBeforeLeave } from '@solidjs/router';

export const useRouteTransition = () => {
	const transition = (fnStartingTheSynchronousTransition: () => void) => {
		if (!document.startViewTransition) {
			return fnStartingTheSynchronousTransition();
		}

		const transition = document.startViewTransition(
			fnStartingTheSynchronousTransition,
		);
	};

	useBeforeLeave((e) => {
		if (!e.defaultPrevented) {
			e.preventDefault();
			transition(() => {
				e.retry(true);
			});
		}
	});
};
