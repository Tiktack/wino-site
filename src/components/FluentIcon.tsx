import { type JSX, splitProps } from "solid-js";

interface FluentIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  icon: string;
}

const FluentIcon = (props: FluentIconProps) => {
  const [local, others] = splitProps(props, ["icon"]);

  return (
    <div
      style={{
        width: "1.1rem",
        height: "1.1rem",
        fill: "var(--text-primary)",
        display: "flex",
        "align-items": "center",
        "justify-content": "center"
      }}
      {...others}
      innerHTML={local.icon}
    />
  );
};

export default FluentIcon;