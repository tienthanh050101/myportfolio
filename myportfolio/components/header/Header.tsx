"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./Header.css";

type ActiveKey = "work" | "about" | "blog" | "todo";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [active, setActive] = useState<ActiveKey>(
    pathname === "/todo-list" ? "todo" : "work"
  );

  useEffect(() => {
    if (!isHome) return;

    const sections = [
      { id: "hero", key: "about" },
      { id: "testimonial", key: "blog" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const found = sections.find((s) => s.id === entry.target.id);
            if (found) setActive(found.key as ActiveKey);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

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
        <Link
          href="/"
          className={`nav-item ${active === "work" ? "active" : ""}`}
          onClick={() => setActive("work")}
        >
          Work
        </Link>

        <Link
          href="/todo-list"
          className={`nav-item ${active === "todo" ? "active" : ""}`}
          onClick={() => setActive("todo")}
        >
          To do List
        </Link>
      </nav>
    </header>
  );
}
