import Link from "next/link";
import Heading from "@/components/Heading";
import { getFeaturedReview } from "@/lib/reviews";
import Image from "next/image";

export default async function HomePage() {
  const review = await getFeaturedReview();
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <div
        className="bg-white border rounded shadow w-80 max-w-[952px]
                      hover:shadow-xl sm:w-full "
      >
        <Link
          href={`/reviews/${review.slug}`}
          className="flex flex-col sm:flex-row"
        >
          <Image
            src={review.image}
            alt=""
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <div className="flex flex-col">
            {" "}
            <h2 className="font-orbitron font-semibold py-1 text-center sm:px-2">
              {review.title}
            </h2>
          </div>
        </Link>
      </div>
    </>
  );
}
