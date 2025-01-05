// ToggleSwitch.tsx
import { Switch } from '@kobalte/core';
import { splitProps } from 'solid-js';
import styles from './ToggleSwitch.module.css';

interface ToggleSwitchProps {
	label?: string;
	description?: string;
	checked?: boolean;
	defaultChecked?: boolean;
	disabled?: boolean;
	onChange?: (checked: boolean) => void;
}

export function ToggleSwitch(props: ToggleSwitchProps) {
	const [local, others] = splitProps(props as ToggleSwitchProps, [
		'checked',
		'label',
		'description',
		'onChange',
		'defaultChecked',
		'disabled',
	]);

	return (
		<Switch.Root
			class={`${styles.switch}`}
			checked={local.checked}
			defaultChecked={local.defaultChecked}
			disabled={local.disabled}
			onChange={(checked) => local.onChange?.(checked)}
			{...others}
		>
			<div class={styles.container}>
				<Switch.Input class={styles.input} />
				<Switch.Control class={styles.control}>
					<Switch.Thumb class={styles.thumb} />
				</Switch.Control>

				<div class={styles.labelContainer}>
					{local.label && (
						<Switch.Label class={styles.label}>{local.label}</Switch.Label>
					)}
					{local.description && (
						<Switch.Description class={styles.description}>
							{local.description}
						</Switch.Description>
					)}
				</div>
			</div>
		</Switch.Root>
	);
}
