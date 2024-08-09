"use client";

import { useIsClient } from "@/lib/hooks";
import { SearchableReview } from "@/lib/reviews";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export interface SearchBoxProps {
  reviews: SearchableReview[];
}

export default function SearchBox() {
  const router = useRouter();
  const isClient = useIsClient();

  const [query, setQuery] = useState("");
  const [reviews, setReviews] = useState<SearchableReview[]>([]);
  const [debouncedQuery] = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery.length > 1) {
      const controller = new AbortController();
      (async () => {
        const url = "/api/search?query=" + encodeURIComponent(debouncedQuery);
        const response = await fetch(url, { signal: controller.signal });
        const reviews = await response.json();
        setReviews(reviews);
      })();
      return () => controller.abort();
    } else {
      setReviews([]);
    }
  }, [debouncedQuery]);

  const handleChange = (review: SearchableReview) => {
    router.push(`/reviews/${review.slug}`);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative w-48">
      <Combobox onChange={handleChange}>
        <ComboboxInput
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search…"
          className="border px-2 py-1 rounded w-full"
        />
        <ComboboxOptions className="absolute bg-white py-1 w-full">
          {reviews.map((review) => (
            <ComboboxOption key={review?.slug} value={review}>
              {({ focus }) => (
                <span
                  className={`block px-2 truncate w-full ${
                    focus ? "bg-orange-100" : ""
                  }`}
                >
                  {review.title}
                </span>
              )}
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}
