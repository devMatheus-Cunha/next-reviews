import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Reviews",
};

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map(({ title, image, slug }) => (
          <li
            key={title}
            className="bg-white border rounded shadow w-80 hover:shadow-xl"
          >
            <Link href={`/reviews/${slug}`}>
              <>
                <Image
                  src={image}
                  alt={title}
                  width="320"
                  height="180"
                  className="mb-2 rounded"
                />
                <h2 className="font-orbitron font-semibold text-center">
                  {title}
                </h2>
              </>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
