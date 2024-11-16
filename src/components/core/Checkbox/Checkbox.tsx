import type { ValidComponent } from "solid-js"
import { Match, splitProps, Switch } from "solid-js"
import { FaSolidCheck, FaSolidMinus } from 'solid-icons/fa'

import * as CheckboxPrimitive from "@kobalte/core/checkbox"
import type { PolymorphicProps } from "@kobalte/core/polymorphic"
import cn from "classnames"
import styles from "./Checkbox.module.css"

type CheckboxRootProps<T extends ValidComponent = "div"> =
  CheckboxPrimitive.CheckboxRootProps<T> & { class?: string }

const Checkbox = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, CheckboxRootProps<T>>
) => {
  const [local, others] = splitProps(props as CheckboxRootProps, ["class"])
  return (
    // <label class={styles.checkboxContainer}>
    <CheckboxPrimitive.Root
      // class={cn(styles.checkboxRoot, local.class)}
      class={cn(styles.checkboxInner, local.class)}
      {...others}
    >
      <CheckboxPrimitive.Input class={styles.input} />
      <CheckboxPrimitive.Control class={styles.control}>
        <CheckboxPrimitive.Indicator class={styles.checkboxIndicator}>
          <Switch>
            <Match when={!others.indeterminate}>
              {/* <svg aria-hidden="true" class={styles.checkboxGlyph} viewBox="0 0 24 24">
                  <path class={styles.pathCheckmark} d="M 4.5303 12.9697 L 8.5 16.9393 L 18.9697 6.4697" fill="none" />
                </svg> */}
              <FaSolidCheck class={styles.icon} />
            </Match>
            <Match when={others.indeterminate}>
              <FaSolidMinus class={styles.icon} />
            </Match>
          </Switch>
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Control>
    </CheckboxPrimitive.Root>

    //   <span class="svelte-4ss5hf">Checkbox</span>
    // </label>
  )
}

export { Checkbox }