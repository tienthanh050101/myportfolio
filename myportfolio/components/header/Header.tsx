import Image from "next/image";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">

      <div className="header-left">
        <Image
          src="/image/headerface.png"
          width={50}
          height={50}
          alt="Avatar"
          className="avatar"
        />

        <div className="name-block">
          <h2 className="name">
            Michael <br /> Lucas Abra
          </h2>
          <p className="job">UI & UX Designer</p>
        </div>
      </div>

      <nav className="nav">
        <a href="#" className="nav-item active">Work</a>
        <a href="#hero" className="nav-item">About Me</a>
        <a href="#testimonial" className="nav-item">Blog</a>
        <a href="#" className="nav-item">Content</a>
      </nav>

    </header>
  );
}