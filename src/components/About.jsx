import { Landmark, Timer, User } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section className="flex flex-col gap-10 items-center justify-center mt-20">
      <div>
        <h1 className="font-licorice text-[8vw]">About our Agency</h1>
      </div>

      <div className="flex justify-center items-center px-20">
        <p>
          We're a passionate team of designers and developers dedicated to
          creating exceptional digital experiences. With years of expertise in
          website and thumbnail design, we help businesses stand out in the
          digital landscape.
        </p>
      </div>

      <div className="flex justify-around items-center gap-10">
        <div className="flex items-center border-2 border-slate-100 border-opacity-35 gap-2 px-6 py-4 rounded-lg shadow-lg ">
          <User />
          <h3 className="max-w-[10vw]">25+ Happy Customers</h3>
        </div>
        <div className="flex items-center border-2 border-slate-100 border-opacity-35 gap-2 px-6 py-4 rounded-lg shadow-lg ">
          <Landmark />
          <h3 className="max-w-[12vw]">100+ Projects Done</h3>
        </div>
        <div className="flex items-center border-2 border-slate-100 border-opacity-35 gap-2 px-6 py-4 rounded-lg shadow-lg ">
          <Timer />
          <h3 className="max-w-[10vw]">5+ Years of Experience</h3>
        </div>
      </div>
    </section>
  );
};

export default About;
