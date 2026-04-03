import Link from "next/link";
import { getAllLives } from "@/lib/lives";

const Page = async () => {
  const lives = await getAllLives();

  return (
    <ul className="not-prose list-none p-0">
      {lives.map((life) => (
        <li key={life.slug}>
          <Link
            href={`/lives/${life.slug}`}
            className="block border-b border-gray-200 py-4 no-underline hover:bg-gray-50"
          >
            <span className="text-lg">{life.title}</span>
            {life.tags.length > 0 && (
              <span className="mt-0.5 flex gap-2">
                {life.tags.map((tag) => (
                  <span key={tag} className="text-xs text-gray-300">
                    {tag}
                  </span>
                ))}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Page;
