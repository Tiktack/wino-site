import type { JSX } from "solid-js";
import type { PostMetadata } from "./blog(list)";

interface BlogLaytoutProps {
  children: JSX.Element;
  metadata: PostMetadata;
}

const BlogLaytout = (props: BlogLaytoutProps) => {
  return (
    <div>
      <img src="https://source.unsplash.com/random/800x600" alt="Random" />
      {props.children}
    </div>
  );
}

export default BlogLaytout;