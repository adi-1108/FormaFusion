import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col  gap-10 px-20 py-5 mt-20 rounded">
      <div className="flex justify-between items-center ">
        <h1>/services</h1>
        <h1 className="font-licorice text-[8vw] ">
          <span>Services</span>
        </h1>
      </div>
      <div className="flex gap-5">
        <img
          src="https://images.unsplash.com/photo-1737157998574-2a75f0c52a09?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Service 1"
          className="flex-1 min-w-[20vw] h-[60vh] ease-in-out duration-300 transition-[flex] w-[20vw] hover:flex-[5] object-cover rounded-xl"
        />
        <img
          src="https://images.unsplash.com/photo-1730767033098-d8234b575e6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Service 2"
          className="flex-1 min-w-[20vw] h-[60vh] w-[20vw] hover:flex-[5] ease-in-out duration-300 transition-[flex] object-cover rounded-xl"
        />
        <img
          src="https://images.unsplash.com/photo-1726442107682-f15bdd971aab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Service 3"
          className="flex-1 min-w-[20vw] h-[60vh] w-[20vw] hover:flex-[5] ease-in-out duration-300 transition-[flex] object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default Services;
