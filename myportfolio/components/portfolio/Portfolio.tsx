import Image from "next/image";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio-wrapper">
      <div className="filter-menu">
        <span className="active">All</span>
        <span>App</span>
        <span>Website</span>
        <span>Mobile</span>
      </div>

      <div className="portfolio-grid">
        <div className="portfolio-card">
          <div className="card-photo card-photo1">
          <img
            src="/image/pr1.png"
            
            alt="project"
          />
          </div>
          <div className="card-info">
            <span className="category">CATEGORY</span>
            <div className="info-row">
              <span className="title">PROJECT TITLE</span>
              <span className="year">2018</span>
            </div>
          </div>
        </div>

        <div className="portfolio-card">
          <div className="card-photo card-photo2">
          <img
           
            src="/image/pr2.png"
            
            alt="project"
          />
          </div>
          <div className="card-info">
            <span className="category">CATEGORY</span>
            <div className="info-row">
              <span className="title">PROJECT TITLE</span>
              <span className="year">2018</span>
            </div>
          </div>
        </div>

        <div className="portfolio-card">
          <div className="card-photo card-photo3">
          <img
            
            src="/image/pr3.png"
           
            alt="project"
          />
          </div>
          <div className="card-info">
            <span className="category">CATEGORY</span>
            <div className="info-row">
              <span className="title">PROJECT TITLE</span>
              <span className="year">2018</span>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-center-btn">
        <button className="btn-portfolio">See My Portofolio</button>
      </div>

      <div className="about-container">
        <div className="about-img">
          <Image
            src="/image/jumbotronBig.png"
            width={350}
            height={450}
            alt="about image"
          />
        </div>

        <div className="about-text">
          <h3 className="about-small">ABOUT ME</h3>
          <h1 className="about-title">WHO AM I</h1>

          <p className="about-desc">
            I am a passionate software developer with a strong interest in technology and continuous learning. I enjoy solving complex problems and building reliable, efficient, and user-friendly applications. With solid logical thinking and experience working with various programming languages and frameworks, I can quickly adapt to new technologies and project requirements. I value clean, maintainable code and always pay attention to performance and scalability. In addition, I work well both independently and in a team, communicate clearly, and take responsibility for my work, aiming to deliver practical value to businesses and end users.
          </p>

          <button className="btn-cv">Get My CV</button>
        </div>
      </div>
    </div>
  );
}
