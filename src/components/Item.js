import React from "react";
// import ProjectImage from "./ProjectImage";
// import src1 from "../img/project1.jpeg";

export default function Item({ title, desc, image, href }) {
  return (
    <div className="w-[386px] h-[489px] mx-[30px] my-[25px] p-5 bg-black rounded-3xl">
      <img
        className="w-[337px] h-[219px] m-auto mb-3 text-white rounded-[17px]"
        src={image}
        alt="Project_image"
      />
      <div className="text-white text-[26px] font-normal font-Aladin tracking-wide">
        {title}
      </div>

      <div className="w-[337px] h-[106px] text-white text-xl font-normal font-Aladin tracking-wide">
        {desc}
      </div>
      <a
        href={href}
        className="block w-[141px]   h-12 mt-[15px] m-auto text-center bg-yellow-900 rounded-[19px] shadow-inner border-2"
      >
        <span className=" text-neutral-400 text-[28px] font-normal font-Akaya  border-neutral-700">
          Project
        </span>
      </a>
    </div>
  );
}
