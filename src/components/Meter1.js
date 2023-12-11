import React from "react";

export default function Meter1({ title, width, color, percent }) {
  return (
    <div className="flex justify-between w-full h-9 items-center">
      <p className="w-[150px] h-9 text-white text-base font-normal font-serif leading-9">
        {title}
      </p>
      <div className="relative w-[405px] h-[9px] bg-white rounded-xl ">
        <div
          className={`absolute ${width} h-[9px] ${color} rounded-xl top-0 z-10`}
        ></div>
      </div>
      <p className="w-[47px] h-9 text-white text-base font-normal font-serif leading-9">
        {percent}%
      </p>
    </div>
  );
}
