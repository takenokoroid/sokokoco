"use client";

import { useState } from "react";
import LifeList from "@/components/LifeList";

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
        <div className="mt-6">
          <LifeList lives={filteredLives} />
        </div>
      )}
    </div>
  );
};

export default SearchContent;
