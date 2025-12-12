import Image from "next/image";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-wrapper">
      
      {/* LEFT */}
      <div className="hero-left">
        <p className="hello">Hello, i’m</p>

        <h1 className="hero-name">
          Michael <br /> Lucas Abra
        </h1>

        <p className="job-title">UI & UX Designer</p>

        {/* Social Icons */}
        <div className="social-icons">
          <Image src="/image/google.png" width={22} height={22} alt="Google" />
          <Image src="/image/linked.png" width={22} height={22} alt="LinkedIn" />
          <Image src="/image/ig.png" width={22} height={22} alt="Instagram" />
          <Image src="/image/fb.png" width={22} height={22} alt="Facebook" />
          <Image src="/image/git.png" width={22} height={22} alt="Github" />
        </div>

        {/* BUTTONS */}
        <div className="hero-buttons">
          <button className="btn-black">
            Get My Resume
          </button>

          <button className="btn-outline">
            See My Resume
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-right">
        <Image
          src="/image/jumbotronBig.png"
          alt="Profile"
          width={350}
          height={350}
          className="hero-person"
        />
      </div>
    </section>
  );
}
