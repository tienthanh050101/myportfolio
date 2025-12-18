"use client";

import Link from "next/link";
import "./bubble.css";

export default function HomeBubbles() {
  return (
    <div className="bubble-wrapper">
      <Link href="#hero" className="bubble bubble-about">
        About
      </Link>

      <Link href="#testimonial" className="bubble bubble-blog">
        Blog
      </Link>
    </div>
  );
}