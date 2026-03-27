import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";

const getStory = async () => {
  const filePath = path.join(
    process.cwd(),
    "content",
    "lives",
    "woman_passion_lost_story.md",
  );
  const file = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(file);
  const result = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);
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
