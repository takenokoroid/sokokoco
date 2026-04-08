import Link from "next/link";

type LifeMeta = {
  slug: string;
  title: string;
  tags: string[];
};

const LifeList = ({ lives }: { lives: LifeMeta[] }) => {
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
              <span className="mt-0.5 block text-xs text-gray-300">
                {life.tags.join("・")}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LifeList;
