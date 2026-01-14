import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const PingFangSC = localFont({
  src: [
    {
      path: "./PingFangSC-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./PingFangSC-semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "阿月严选",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${PingFangSC.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
