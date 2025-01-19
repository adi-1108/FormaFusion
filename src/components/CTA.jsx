import React from "react";

const CTA = () => {
  return (
    <div className="p-6 flex justify-center flex-col gap-5 mt-20 items-center rounded-lg shadow-md">
      <h1 className="font-licorice text-[8vw]">Get in Touch</h1>

      <div className="w-[50vw] p-10 border bg-background  border-opacity-10 rounded-3xl">
        <form className="space-y-4 flex flex-col">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium ml-4 text-white"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-3  py-2 border border-gray-300 bg-transparent rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium ml-4 text-white"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3  py-2 border border-gray-300 bg-transparent rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium ml-4 text-white"
            >
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="mt-1 block w-full px-3  py-2 border border-gray-300 bg-transparent rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlF
              ml-4or="message"
              className="block ml-5 text-sm font-medium text-white"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="mt-1 block w-full px-6  py-2 border border-gray-300 bg-transparent rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4  bg-indigo-600 text-white font-medium rounded-full shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CTA;
