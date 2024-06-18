import Link from "next/link";
import Heading from "@/components/Heading";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <div
        className="bg-white border rounded shadow w-80 max-w-[752px]
                      hover:shadow-xl sm:w-full "
      >
        <Link
          href="/reviews/stardew-valley"
          className="flex flex-col sm:flex-row"
        >
          <Image
            src="/images/stardew-valley.jpg"
            alt=""
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <div>
            <h2 className="font-orbitron font-semibold py-1 text-center sm:px-2">
              Stardew Valley
            </h2>
            <p className="p-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
