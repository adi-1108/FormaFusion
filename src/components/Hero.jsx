import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex justify-center items-center flex-col relative ">
      <div className="text-center leading-[8vw] ">
        <h1 className="font-limelight text-[10vw]">Creative Design</h1>
        <h1 className="font-licorice text-[10vw] text-mainYellow">Agency</h1>
      </div>

      <button className="bg-transparent border mt-20 border-white text-white py-4 px-6 rounded-full">
        Book a Call
      </button>
    </section>
  );
};

export default Hero;
