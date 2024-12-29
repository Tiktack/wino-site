import remarkGfm from "remark-gfm";
import { defineConfig } from "@solidjs/start/config";
/* @ts-ignore */
import pkg from "@vinxi/plugin-mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const { default: mdx } = pkg;
export default defineConfig({
  extensions: ["mdx", "md"],
  vite: {
    plugins: [
      mdx.withImports({})({
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
      }),
    ],
  },
  // server: {
  // 	baseURL: process.env.BASE_PATH,
  // 	preset: "static"
  // }
});
