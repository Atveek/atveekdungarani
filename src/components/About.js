import React from "react";
import Meter1 from "./Meter1";
import Skills from "../Data/Skill";

export default function About() {
  return (
    <div className="bg-black w-full h-auto pb-5">
      <h1 className="relative font-sans text-white m-auto text-[30px] text-center p-16 tracking-wide  after:content-[''] after:w-[72px] after:h-[9.33px] after:absolute after:bg-[#15CD6A] after:top-[130px] after:right-[47%] after:rounded-[222px]">
        ABOUT ME
      </h1>
      <p className="w-[960px] m-auto h-[30.94px] text-center text-neutral-500 text-base font-normal font-serif leading-9">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </p>

      <div className="flex  items-center w-full flex-row justify-between">
        <div className="w-[45%] mt-[20px] ml-[70px]">
          <h1 className="w-[250px] h-[46.96px]  text-white text-[23px] font-normal font-serif leading-[47.40px]">
            Get to know me!
          </h1>
          <br />
          <br />
          <p className="w-[680px] h-[370.66px] text-white text-base font-normal font-serif leading-7">
            I'm a Full-Stack web developer based in India, and I'm deeply
            passionate about creating innovative web applications. My journey in
            this field started during my college years when I took my first
            coding class out of curiosity. The moment I wrote my first line of
            code and saw it come to life on the screen, I was hooked.
            <br />
            <br />
            If you're looking to transform your digital ideas into reality,
            whether it's building a dynamic website, an e-commerce platform, or
            a sophisticated web application, I'm here to collaborate and turn
            your vision into a functional masterpiece. Let's connect and embark
            on this exciting journey together.
          </p>
        </div>
        <div className="w-[45%] mt-[20px] mr-[50px]">
          <h1 className="w-[187px] h-[20.96px] text-white text-[23px] font-normal font-serif leading-[47.40px]">
            My Skill
          </h1>
          <br />
          <br />
          {Skills.map((Skill) => {
            return (
              <Meter1
                key={Skill.id}
                title={Skill.title}
                width={Skill.width}
                color={Skill.color}
                percent={Skill.percent}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
