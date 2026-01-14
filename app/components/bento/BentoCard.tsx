export function BentoCard({
  children,
  className,
}: Readonly<{ children?: React.ReactNode; className?: string }>) {
  return <div className={`${className} BentoCard`}>{children}</div>;
}
