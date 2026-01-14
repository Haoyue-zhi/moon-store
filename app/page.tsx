import { BentoGrid } from "./components/bento/BentoGrid";
import { Info } from "./components/info";

export default function Home() {
  return (
    <div className="flex items-center justify-center lg:h-screen">
      <div className="flex flex-col px-4 py-8 lg:size-full lg:max-w-260">
        <Info />
        <BentoGrid />
      </div>
    </div>
  );
}
