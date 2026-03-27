import fs from "node:fs";
import path from "node:path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkHtml from "remark-html";
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
    .use(() => (_tree, vfile) => {
      matter(vfile);
    })
    .use(remarkHtml)
    .process(file);
  const data = (result.data.matter ?? {}) as Record<string, unknown>;
  return { title: data.title as string, html: String(result) };
};

const Page = async () => {
  const story = await getStory();

  return (
    <article>
      <h1>{story.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: story.html }} />
    </article>
  );
};

export default Page;
