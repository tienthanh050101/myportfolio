import Image from "next/image";
import "./ReadMe.css";

export default function ReadMe() {
  return (
    <section className="readme-section">
      {/* TITLE */}
      <h2 className="readme-title">READ ME</h2>
      <p className="readme-subtitle">
        Sometimes I write multiple projects into a blog post
      </p>

      {/* BLOG CARDS */}
      <div className="readme-grid">

        {/* CARD 1 */}
        <div className="readme-card">
          <Image
            src="/image/cat1.png"
            alt="blog 1"
            width={300}
            height={180}
            className="readme-img"
          />

          <h3 className="readme-card-title">Website Portofolio</h3>

          <p className="readme-card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pharetra, hendrerit.
          </p>

          <div className="readme-card-footer">
            <button className="detail-btn">Detail</button>

            <div className="user-info">
              <Image
                src="/image/Vector.png"
                alt="User"
                width={22}
                height={22}
                className="user-avatar"
              />
              <span className="user-name">Michael</span>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="readme-card">
          <Image
            src="/image/cat2.png"
            alt="blog 2"
            width={300}
            height={180}
            className="readme-img"
          />

          <h3 className="readme-card-title">Web Developer</h3>

          <p className="readme-card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pharetra, hendrerit.
          </p>

          <div className="readme-card-footer">
            <button className="detail-btn">Detail</button>

            <div className="user-info">
              <Image
                src="/image/Vector.png"
                alt="User"
                width={22}
                height={22}
                className="user-avatar"
              />
              <span className="user-name">Michael</span>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="readme-card">
          <Image
            src="/image/cat3.png"
            alt="blog 3"
            width={300}
            height={180}
            className="readme-img"
          />

          <h3 className="readme-card-title">Internet of Things</h3>

          <p className="readme-card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pharetra, hendrerit.
          </p>

          <div className="readme-card-footer">
            <button className="detail-btn">Detail</button>

            <div className="user-info">
              <Image
                src="/image/Vector.png"
                alt="User"
                width={22}
                height={22}
                className="user-avatar"
              />
              <span className="user-name">Michael</span>
            </div>
          </div>
        </div>
      </div>

      {/* CENTER BUTTON */}
      <div className="readme-center-btn">
        <button className="readme-btn">See My Post</button>
      </div>
    </section>
  );
}
