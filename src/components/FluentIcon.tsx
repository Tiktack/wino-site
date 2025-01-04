import { type JSX, splitProps } from "solid-js";
import * as stylex from "@stylexjs/stylex";
import { colors } from "~/shared/theme/tokens.stylex";

interface FluentIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  icon: string;
}

export const FluentIcon = (props: FluentIconProps) => {
  const [local, others] = splitProps(props, ["icon"]);

  return (
    <div
      {...stylex.attrs(styles.icon)}
      {...others}
      innerHTML={local.icon}
    />
  );
};

const styles = stylex.create({
  icon: {
    width: "1.1rem",
    height: "1.1rem",
    fill: colors.textPrimary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
