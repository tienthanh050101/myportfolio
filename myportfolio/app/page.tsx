import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Testimonial from "@/components/testimonial";
import ReadMe from "@/components/readme";
import "./globals.css";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center w-full text-gray-800">
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
    </div>
  );
}
