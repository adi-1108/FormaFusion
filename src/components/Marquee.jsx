import React from "react";

const Marquee = () => {
  return (
    <section className="h-[12vh] bg-transparent overflow-hidden whitespace-nowrap border-t-2 py-4 border-b-2">
      <div className="flex animate-marquee text-[2vw] justify-center items-center">
        <span className="mx-8">Thumbnail design</span>
        <span className="mx-8">Web Design</span>
        <span className="mx-8">Video Editing</span>
        <span className="mx-8">Thumbnail design</span>
        <span className="mx-8">Web Design</span>
        <span className="mx-8">Video Editing</span>
        <span className="mx-8">Web Design</span>
        <span className="mx-8">Video Editing</span>
        <span className="mx-8">Thumbnail design</span>
        <span className="mx-8">Web Design</span>
        <span className="mx-8">Video Editing</span>
        <span className="mx-8">Web Design</span>
        <span className="mx-8">Video Editing</span>
        <span className="mx-8">Thumbnail design</span>
        <span className="mx-8">Web Design</span>
        <span className="mx-8">Video Editing</span>
        <span className="mx-8">Web Design</span>
        <span className="mx-8">Video Editing</span>
        <span className="mx-8">Thumbnail design</span>
        <span className="mx-8">Web Design</span>
        <span className="mx-8">Video Editing</span>
        <span className="mx-8">Web Design</span>
        <span className="mx-8">Video Editing</span>
        <span className="mx-8">Thumbnail design</span>
        <span className="mx-8">Web Design</span>
        <span className="mx-8">Video Editing</span>
        <span className="mx-8">Web Design</span>
        <span className="mx-8">Video Editing</span>
        <span className="mx-8">Thumbnail design</span>
        <span className="mx-8">Web Design</span>
        <span className="mx-8">Video Editing</span>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Marquee;
