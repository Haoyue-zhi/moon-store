"use client";
import { useState } from "react";

export function SuppCard({
  front, // 正面具名插槽内容
  back, // 背面具名插槽内容
}: Readonly<{
  front?: React.ReactNode; // 替代原 children，作为正面内容
  back?: React.ReactNode; // 新增背面内容
}>) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group aspect-square size-full cursor-pointer perspective-distant lg:aspect-auto"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`${flipped ? "rotate-x-180" : ""} relative size-full rounded-4xl bg-white shadow-[2px_4px_12px_#00000014] transition-transform duration-300 transform-3d`}
      >
        <div className="absolute flex size-full items-center justify-center backface-hidden">
          {front}
          <span className="icon-[eva--flip-fill] absolute end-3.5 bottom-3.5 text-gray-600" />
        </div>
        <div className="absolute flex size-full rotate-x-180 items-center justify-center backface-hidden">
          {back}
        </div>
      </div>
    </div>
  );
}
