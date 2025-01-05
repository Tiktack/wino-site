import remarkGfm from "remark-gfm";
import { defineConfig } from "@solidjs/start/config";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import viteStyleXPlugin from "vite-plugin-stylex"
/* @ts-ignore */
import pkg from "@vinxi/plugin-mdx";
const { default: vinxiMdxPlugin } = pkg;

export default defineConfig({
  extensions: ["mdx", "md"],
  vite: {
    plugins: [
      vinxiMdxPlugin.withImports({})({
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
      }),
      viteStyleXPlugin(),
    ],
  },
  ssr: true,
  server: {
    baseURL: process.env.BASE_PATH,
    preset: "github-pages",
  }
});
