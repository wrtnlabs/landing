import Welcome from "./_components/home/Welcome";
import HowItWorks from "./_components/home/HowItWorks";
import LatestArticles from "./_components/home/LatestArticles";
import Roadmap from "./_components/home/Roadmap";
import Service from "./_components/home/Service";
import OpenSource from "./_components/home/OpenSource";
import Banner from "./_components/common/Banner";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white">
      <Welcome />
      <HowItWorks />
      <Service />
      <OpenSource />
      <Roadmap />
      <LatestArticles />
      <Banner />
    </div>
  );
}
