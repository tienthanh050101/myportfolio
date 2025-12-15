import Image from "next/image";
import "./Testimonial.css";

export default function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-box">
        <p className="testimonial-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida purus
          bibendum eget ut eget magna. Tellus arcu sit ultricies tempor odio
          aliquam sit. Ultrices blandit vel interdum viverra integer risus,
          pulvinar. Sed malesuada odio malesuada velit. Donec id faucibus
          ultricies fringilla pulvinar vulputate mauris, lorem egestas.
        </p>
      </div>

      <div className="testimonial-avatar">
        <Image src="/image/headerface.png" alt="User" width={80} height={80} />
      </div>

      <div className="testimonial-info">
        <h3 className="testimonial-name">Michael Lucas Abra</h3>
        <p className="testimonial-role">UI & UX Designer</p>

        <div className="testimonial-stars">
          <Image src="/image/Star 6.png" alt="star" width={13} height={13} />
          <Image src="/image/Star 6.png" alt="star" width={13} height={13} />
          <Image src="/image/Star 6.png" alt="star" width={13} height={13} />
          <Image src="/image/Star 6.png" alt="star" width={13} height={13} />
          <Image src="/image/Star 6.png" alt="star" width={13} height={13} />
        </div>
      </div>
    </section>
  );
}
