import { MainCard } from "./MainCard";
import { SuppCard } from "./SuppCard";
import Image from "next/image";

export function BentoGrid() {
  return (
    <div className="flex size-full flex-col gap-4 lg:grid lg:grid-cols-[2fr_1.5fr_2fr]">
      <MainCard
        className="order-1 **:data-img:px-16.25"
        title="官方不支持的 Mac，也能升级最新 macOS。"
        subtitle="OpenCore Legacy Patcher"
        src="/OpenCore.png"
      />

      <div className="order-3 flex gap-5 lg:order-2 lg:col-span-1 lg:flex-col">
        <SuppCard
          front={
            <Image
              src="/fish.png"
              width={100}
              height={100}
              alt="闲鱼"
              className="w-full"
            />
          }
          back={
            <Image
              src="/fish-Qcode.png"
              width={100}
              height={100}
              quality={100}
              alt="闲鱼二维码"
              className="h-auto w-4/5"
            />
          }
        />
        <SuppCard
          front={<Image src="/pdd.png" width={100} height={100} alt="拼多多" />}
          back={
            <Image
              src="/pdd-Qcode.png"
              width={100}
              height={100}
              quality={100}
              alt="拼多多二维码"
              className="h-auto w-4/5"
            />
          }
        />
      </div>

      <MainCard
        className="order-2 **:data-img:pb-0 lg:order-3"
        subtitle="🤔思考中......"
        src="/Memoji.png"
      />
    </div>
  );
}
