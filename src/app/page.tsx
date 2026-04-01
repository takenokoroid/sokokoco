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
            className="block border-b border-gray-200 py-4 text-lg no-underline hover:bg-gray-50"
          >
            {life.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Page;
