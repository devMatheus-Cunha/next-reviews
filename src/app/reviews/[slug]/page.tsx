import Heading from "@/components/Heading";
import { getReview, getSlugs } from "@/lib/reviews";
import Image from "next/image";
import { title } from "process";

interface ReviewPageParams {
  slug: string;
}

interface ReviewPageProps {
  params: ReviewPageParams;
}

export async function generateStaticParams(): Promise<ReviewPageParams[]> {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }: ReviewPageProps) {
  const { title } = await getReview(slug);
  return {
    title: title,
  };
}

export default async function ReviewsPage({
  params: { slug },
}: ReviewPageProps) {
  const { title, date, image, body } = await getReview(slug);
  return (
    <>
      <Heading>{title}</Heading>
      <p className="italic pb-2">{date}</p>
      <Image
        src={image}
        alt={title}
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: body }}
        className="max-w-screen-sm prose prose-slate"
      />
    </>
  );
}
