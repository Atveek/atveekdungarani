import React from "react";
import src from "../img/profile-pic (3).png";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-[715px] gradient1">
        <img
          src={src}
          className="absolute w-[471px] h-[471px] top-[120px] left-[141px] filter drop-shadow-3xl"
          alt="image1"
        />
        <h1 className="absolute w-[944px] text-white leading-[85px] font-offside text-[80px] top-[200px] right-12">
          I'm Atveek Dungarani. A Full Stack Developer{" "}
          <span className="text-[#727272] font-inter m-0">based in India.</span>
        </h1>
        <p className="absolute w-[802px] text-white text-xl font-normal font-Galada tracking-wide bottom-28 right-20">
          I'm probably the most passionate Developer you will ever get to work
          with. If you have a great project that needs some amazing skills, I'm
          your guy.
        </p>
      </div>
      <About />
      <Project />
      <Contact />
    </>
  );
}
