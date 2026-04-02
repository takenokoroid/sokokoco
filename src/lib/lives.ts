import fs from "node:fs";
import path from "node:path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import type { VFile } from "vfile";
import { matter } from "vfile-matter";

const LIVES_DIR = path.join(process.cwd(), "src", "content", "lives");

export const getAllSlugs = () => {
  return fs
    .readdirSync(LIVES_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
};

export const getLifeBySlug = async (slug: string) => {
  const filePath = path.join(LIVES_DIR, `${slug}.md`);
  const file = fs.readFileSync(filePath, "utf-8");

  const firstLine = file.split("\n").find((line) => line.startsWith("# "));
  const title = firstLine ? firstLine.replace(/^#\s+/, "") : slug;

  const result = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(() => (_tree: unknown, vfile: VFile) => {
      matter(vfile);
    })
    .use(remarkRehype)
    .use(rehypeReact, { Fragment, jsx, jsxs })
    .process(file);

  return { slug, title, content: result.result };
};

export const getAllLives = async () => {
  const slugs = getAllSlugs();
  return Promise.all(slugs.map((slug) => getLifeBySlug(slug)));
};
