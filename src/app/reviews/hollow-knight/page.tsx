import Heading from "@/components/Heading";
import Image from "next/image";

export default function HollowKnightPage() {
  return (
    <>
      <Heading>Hollow Knight</Heading>
      <Image
        src="/images/hollow-knight.jpg"
        alt="image hallow-knight"
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <p>This will be the review for Hollow Knight.</p>
    </>
  );
}
