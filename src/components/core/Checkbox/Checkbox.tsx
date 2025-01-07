import Checkmark24Regular from '@fluentui/svg-icons/icons/checkmark_24_regular.svg?raw';
import * as CheckboxPrimitive from '@kobalte/core/checkbox';
import type { PolymorphicProps } from '@kobalte/core/polymorphic';
import cn from 'classnames';
import type { ValidComponent } from 'solid-js';
import { Match, Switch, splitProps } from 'solid-js';
import { FluentIcon } from '~/components/FluentIcon';
import styles from './Checkbox.module.css';

type CheckboxRootProps<T extends ValidComponent = 'div'> =
	CheckboxPrimitive.CheckboxRootProps<T> & { class?: string };

const Checkbox = <T extends ValidComponent = 'div'>(
	props: PolymorphicProps<T, CheckboxRootProps<T>>,
) => {
	const [local, others] = splitProps(props as CheckboxRootProps, ['class']);
	return (
		<CheckboxPrimitive.Root
			class={cn(styles.checkboxInner, local.class)}
			{...others}
		>
			<CheckboxPrimitive.Input class={styles.input} />
			<CheckboxPrimitive.Control class={styles.control}>
				<CheckboxPrimitive.Indicator class={styles.checkboxIndicator}>
					<Switch>
						<Match when={!others.indeterminate}>
							<FluentIcon icon={Checkmark24Regular} class={styles.icon} />
						</Match>
						<Match when={others.indeterminate}>
							<FluentIcon icon={Checkmark24Regular} class={styles.icon} />
						</Match>
					</Switch>
				</CheckboxPrimitive.Indicator>
			</CheckboxPrimitive.Control>
		</CheckboxPrimitive.Root>
	);
};

export { Checkbox };
