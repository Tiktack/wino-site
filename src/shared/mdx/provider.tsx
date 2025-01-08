import type { Component, JSX } from 'solid-js';
// @ts-ignore
import { MDXProvider as SolidMDXProvider } from 'solid-mdx';
import { components } from './components';

type MDXProviderProps = {
	children: JSX.Element;
};

export const MDXProvider: Component<MDXProviderProps> = (props) => {
	return (
		<SolidMDXProvider components={components}>
			{props.children}
		</SolidMDXProvider>
	);
};
