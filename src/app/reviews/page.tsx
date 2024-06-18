import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-col gap-3">
        <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
          <Link href="/reviews/hollow-knight">
            <>
              <Image
                src="/images/hollow-knight.jpg"
                alt="image hallow-knight"
                width="320"
                height="180"
                className="mb-2 rounded"
              />
              <h2 className="font-orbitron font-semibold text-center">
                {" "}
                Hollow Knight
              </h2>
            </>
          </Link>
        </li>
        <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
          <Link href="/reviews/stardew-valley">
            <>
              <Image
                src="/images/stardew-valley.jpg"
                alt=""
                width="320"
                height="180"
                className="mb-2 rounded"
              />
              <h2 className="font-orbitron font-semibold text-center">
                Stardew Valley
              </h2>
            </>
          </Link>
        </li>
      </ul>
    </>
  );
}
