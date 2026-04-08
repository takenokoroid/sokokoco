import { getAllLives } from "@/lib/lives";
import SearchContent from "./_components/SearchContent";

const Page = async () => {
  const allLives = await getAllLives();
  const lives = allLives.map(({ slug, title, tags }) => ({
    slug,
    title,
    tags,
  }));
  const tags = [...new Set(allLives.flatMap((l) => l.tags))];

  return (
    <section>
      <h1>タグで探す</h1>
      <SearchContent lives={lives} tags={tags} />
    </section>
  );
};

export default Page;
