import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Testimonial from "@/components/Testimonial";
import ReadMe from "@/components/ReadMe";
import "./globals.css";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-full bg-gray-100 text-gray-800">
      <section id="hero">
        <Hero />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="testimonial">
        <Testimonial />
      </section>
      <section id="readme">
        <ReadMe />
      </section>
    </main>
  );
}
