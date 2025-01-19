import { Link } from "lucide-react";
import React from "react";

const Navbar = () => {
  const links = ["Service", "About", "Contact"];
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-transparent backdrop-blur-lg border-b-[1px] border-slate-200 border-opacity-30 ">
      <div>
        <h1 className="font-krona max-w-[10px] leading-4">
          Forma <span className="text-mainYellow">Fusion</span>
        </h1>
      </div>
      <div className="flex space-x-4 font-krona">
        {links.map((link, index) => (
          <a key={index} href={`#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}
      </div>
      <div>
        <Link />
      </div>
    </nav>
  );
};

export default Navbar;
