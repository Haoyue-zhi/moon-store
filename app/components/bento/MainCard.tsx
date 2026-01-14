import { BentoCard } from "./BentoCard";
import Image from "next/image";

export function MainCard({
  title = "",
  subtitle = "",
  src = "",
  url = "",
  className = "",
}: Readonly<{
  title?: string;
  subtitle?: string;
  src?: string;
  url?: string;
  className?: string;
}>) {
  return (
    <BentoCard className={`${className} aspect-5/7 lg:aspect-auto`}>
      <div
        className={`${className} relative flex h-full ${url && "cursor-pointer"}`}
      >
        <div className="z-10 w-full p-7 lg:w-9/10">
          <div className="pb-1.75 text-xs tracking-normal text-[#424245] uppercase">
            {subtitle}
          </div>
          <div className="text-[21px] font-semibold tracking-[.007em] text-[#1d1d1f]">
            {title}
          </div>
          {LinkButton(url)}
        </div>
        <div
          className="absolute flex size-full flex-col-reverse px-8 pb-10"
          data-img
        >
          <Image
            src={src}
            width={100}
            height={100}
            quality={100}
            alt={title}
            className="w-full"
          />
        </div>
      </div>
    </BentoCard>
  );
}

function LinkButton(url: string) {
  return url ? (
    <div className="mt-[13.6px] text-[17px] font-normal text-[#0066cc]">
      进一步了解 {">"}
    </div>
  ) : null;
}
