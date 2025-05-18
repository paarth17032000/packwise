import Header from "@/components/layout/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Packwise | Trip Page",
  description: "Trip page shows you your seleced country and it has checklist along with currency convertor.",
};

export default function TripLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header />
        {children}
    </>

  );
}
