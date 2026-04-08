"use client";

import { useState } from "react";
import Link from "next/link";

type LifeMeta = {
  slug: string;
  title: string;
  tags: string[];
};

const SearchContent = ({
  lives,
  tags,
}: {
  lives: LifeMeta[];
  tags: string[];
}) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredLives = selectedTag
    ? lives.filter((life) => life.tags.includes(selectedTag))
    : [];

  return (
    <div className="not-prose">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() =>
              setSelectedTag(selectedTag === tag ? null : tag)
            }
            className={`rounded-full border px-3 py-1 text-sm ${
              selectedTag === tag
                ? "border-gray-800 bg-gray-800 text-white"
                : "border-gray-300 bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {filteredLives.length > 0 && (
        <ul className="mt-6 list-none p-0">
          {filteredLives.map((life) => (
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
      )}
    </div>
  );
};

export default SearchContent;
