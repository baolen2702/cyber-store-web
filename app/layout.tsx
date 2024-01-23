import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/AppHeader";
import { StoreProvider } from "@/components/provider/StoreProvider";
import AppFooter from "@/components/AppFooter";
import { QueryProvider } from "@/components/provider/QueryProvider";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to Cyber Store",
  description:
    "Discover the freshest and tastiest vegetables at our online store! ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <QueryProvider>
          <StoreProvider>
            <AppHeader />
            <main className="min-h-[calc(100vh-165px)] w-full">{children}</main>
            <AppFooter />
          </StoreProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
