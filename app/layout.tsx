import type { Metadata } from "next";
import { TripProvider } from "@/context/TripContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Packwise",
  description: "Packwise is a travel community tool that can be used to make your travel efficient.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <TripProvider>
          {children}
        </TripProvider>
      </body>
    </html>
  );
}
