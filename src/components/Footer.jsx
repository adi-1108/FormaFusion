import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-600 mt-20 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-lg font-semibold">Follow us on</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-110"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-110"
          >
            Twitter
          </a>
          <a
            href="https://www.behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-110"
          >
            Behance
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
