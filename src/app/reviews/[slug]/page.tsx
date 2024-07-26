import Heading from "@/components/Heading";
import { ShareButtons } from "@/components/ShareButtons";
import { getReview, getSlugs } from "@/lib/reviews";
import Image from "next/image";

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
  const { title, date, image, body, subtitle } = await getReview(slug);
  return (
    <>
      <Heading>{title}</Heading>
      <p className="font-semibold pb-3">{subtitle}</p>
      <div className="flex gap-3 items-baseline ">
        <p className="italic pb-2">{date}</p>
        <ShareButtons />
      </div>
      <Image
        src={image}
        alt={title}
        priority
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: body ?? "" }}
        className="max-w-screen-sm prose prose-slate"
      />
    </>
  );
}
