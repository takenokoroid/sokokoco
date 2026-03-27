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

const getStory = async () => {
  const filePath = path.join(
    process.cwd(),
    "content",
    "lives",
    "woman_passion_lost_story.md",
  );
  const file = fs.readFileSync(filePath, "utf-8");
  const result = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(() => (_tree: unknown, vfile: VFile) => {
      matter(vfile);
    })
    .use(remarkRehype)
    .use(rehypeReact, { Fragment, jsx, jsxs })
    .process(file);
  const data = (result.data.matter ?? {}) as Record<string, unknown>;
  return { title: data.title as string, content: result.result };
};

const Page = async () => {
  const story = await getStory();

  return (
    <article className="prose">
      <h1>{story.title}</h1>
      {story.content}
    </article>
  );
};

export default Page;
