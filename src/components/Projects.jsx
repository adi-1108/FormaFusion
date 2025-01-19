import React from "react";

const Projects = () => {
  return (
    <section className="mt-20 ">
      <div className="flex justify-between items-center px-20 py-3">
        <h6>/projects</h6>
        <h1 className="font-licorice text-[8vw] ">Our Projects</h1>
      </div>

      <div className="grid grid-cols-2 gap-4 px-20 py-10 mt-10">
        {Array.from({ length: 4 }).map((_, i) => (
          <img
            src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        ))}
      </div>

      <div className="flex justify-center items-center">
        <button className="bg-transparent border mt-20 border-white text-white py-4 px-6 rounded-full">
          View More Projects
        </button>
      </div>
    </section>
  );
};

export default Projects;
