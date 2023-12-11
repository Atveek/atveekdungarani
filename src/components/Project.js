import React from "react";
import Item from "./Item";
import Items1 from "../Data/item";
export default function Project() {
  return (
    <div className="w-full h-auto bg-[#181823] pb-8">
      <h1 className="relative font-sans text-white m-auto text-[30px] text-center p-12 tracking-wide  after:content-[''] after:w-[72px] after:h-[9.33px] after:absolute after:bg-[#F25A5A] after:top-[110px] after:right-[47%] after:rounded-[222px]">
        PROJECT
      </h1>
      <p className="w-[960px] m-auto h-[71.94px] text-center text-neutral-500 text-base font-normal font-serif leading-9">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </p>
      <div className="grid gap-0 grid-cols-1 mx-8 sm:grid-cols-2 md:grid-cols-3 justify-between">
        {Items1.map((items) => {
          return (
            <Item
              key={items.id}
              image={items.image}
              title={items.title}
              desc={items.desc}
              href={items.href}
            />
          );
        })}
      </div>
    </div>
  );
}
