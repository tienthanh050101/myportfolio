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
          <Image src="/image/pr1.png" width={400} height={260} alt="project" />
          <div className="card-info">
            <span className="category">CATEGORY</span>
            <div className="info-row">
              <span className="title">PROJECT TITLE</span>
              <span className="year">2018</span>
            </div>
          </div>
        </div>

        <div className="portfolio-card">
          <Image src="/image/pr2.png" width={400} height={260} alt="project" />
          <div className="card-info">
            <span className="category">CATEGORY</span>
            <div className="info-row">
              <span className="title">PROJECT TITLE</span>
              <span className="year">2018</span>
            </div>
          </div>
        </div>

        <div className="portfolio-card">
          <Image src="/image/pr3.png" width={400} height={260} alt="project" />
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem
            posuere amet augue. Ut sed elit amet nunc aliquam egestas in ornare
            justo. Pelle dui elementum sagittis nisl, imperdiet. Mi faucibus
            tortor, lacus leo, ac nec aliquam odio purus. Condimentum id arcu
            vitae, amet. Amet, elementum nisi, nunc sed sodales mus at praesent.
            Consequat et sed sodales cursus viverra sollicitudin. Ornare
            convallis elementum a, tristique eget tortor facilisis...
          </p>

          <button className="btn-cv">Get My CV</button>
        </div>
      </div>
    </div>
  );
}
