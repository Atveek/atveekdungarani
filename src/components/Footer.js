import React from "react";
import image from "../img/logo.png";
import github from "../img/icons8-github-384.png";
import instagram from "../img/icons8-instagram-500.png";
import x from "../img/icons8-twitter-500.png";
import LinkedIn from "../img/icons8-linkedin-500.png";

export default function Footer() {
  return (
    <div className="flex flex-row justify-between items-center bg-[#181823]">
      <div className="flex w-[30%] justify-center items-center bg-black rounded-br-[45px] p-2">
        <img src={image} className="w-[115px]  h-[48px]" alt="Logo"></img>
      </div>
      <div className="flex w-[30%] justify-center gap-10 items-center p-2">
        <a href="https://github.com/Atveek" target="_blank" rel="noreferrer">
          <img src={github} className="w-[46px]" alt="Logo" />
        </a>
        <a
          href="https://www.instagram.com/atveek_dungarani/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} className="w-[46px]" alt="Logo" />
        </a>
        <a
          href="https://twitter.com/atveekDungarani"
          target="_blank"
          rel="noreferrer"
        >
          <img src={x} className="w-[46px]" alt="Logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/atveek-dungarani-775b72234/?trk=public_profile_browsemap&sansSubdomain=in"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedIn} className="w-[46px]" alt="Logo" />
        </a>
      </div>
      <div className="text-white text-base font-normal font-Pattaya mr-8">
        Created by Atveek Dungarani
      </div>
    </div>
  );
}
