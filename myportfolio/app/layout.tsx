import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio",
  description: "My Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />     {/* HEADER */}
        <main>{children}</main>
        <Footer />     {/* FOOTER */}
      </body>
    </html>
  );
}
