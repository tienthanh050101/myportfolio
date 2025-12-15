import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { ReactNode } from "react";

export const metadata = {
  title: "Portfolio",
  description: "My Portfolio Website",
};

export type RootLayoutProp= {children: ReactNode}

export default function RootLayout({children}: RootLayoutProp ) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
