import { getAllLives } from "@/lib/lives";
import LifeList from "@/components/LifeList";

const Page = async () => {
  const lives = await getAllLives();

  return <LifeList lives={lives} />;
};

export default Page;
