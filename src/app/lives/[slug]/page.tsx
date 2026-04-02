import { getAllSlugs, getLifeBySlug } from "@/lib/lives";

export const generateStaticParams = () => {
  return getAllSlugs().map((slug) => ({ slug }));
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const life = await getLifeBySlug(slug);

  return <article>{life.content}</article>;
};

export default Page;
