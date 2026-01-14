import Image from "next/image";

function Avatar() {
  return (
    <div
      className="tooltip tooltip-bottom tooltip-open lg:tooltip-left"
      data-tip="微信: Future-0230"
    >
      <Image
        src="/Avatar.png"
        width={150}
        height={150}
        quality={100}
        className="cursor-pointer self-center rounded-full lg:size-15"
        alt="Avatar"
      />
    </div>
  );
}

export function Info() {
  return (
    <div className="mb-16 flex items-center justify-center lg:mb-8 lg:justify-end">
      <Avatar />
    </div>
  );
}
