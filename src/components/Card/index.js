import React from "react";

function Card({ showLabel }) {
  return (
    <div className="bg-white shadow-lg min-w-80 m-2 relative">
      <div className="p-3 shadow-lg">
        <div className="bg-green-800 relative">
          <div className="p-4 w-full text-white font-bold">
            <div className="flex justify-between">
              <h2 className="w-8/12 whitespace-pre-wrap">
                Lorem ipsum dolor sit amet
              </h2>
              <i className="fas fa-share-alt"></i>
            </div>
          </div>
          <div className="bg-opacity-20 bg-white px-4 py-2 text-gray-300 w-full">
            <div className="flex w-full justify-between text-sm mb-1">
              <p className="">Visa validity</p>
              <p className="text-white">20th July 2018</p>
            </div>
            <div className="flex w-full justify-between text-sm mb-1">
              <p className="">No of days of stay allowed</p>
              <p className="text-white">15 days</p>
            </div>
            <div className="flex w-full justify-between text-sm mb-1">
              <p className="">No of entries allowed</p>
              <p className="text-white">10</p>
            </div>
          </div>

          <div className="bg-opacity-10 bg-white px-4 py-2 text-gray-300 w-full">
            <div className="flex w-full justify-between mb-1 font-bold">
              <p className="">Processing time</p>
              <p className="text-white">20 days </p>
            </div>
          </div>
          <hr className="border-gray-700 shadow-inner" />
          <div className="bg-opacity-10 bg-white px-4 pt-2 text-gray-300 w-full">
            <div className="flex w-full justify-between mb-1 font-bold">
              <p className="">Total Fees</p>
              <p className="text-white">
                <span className="text-sm font-thin">₹</span>&nbsp;5600
              </p>
            </div>
            <hr className=" border-gray-700" />
          </div>

          <div className="bg-opacity-10 bg-white px-4 py-2 text-gray-300 w-full">
            <div className="flex w-full justify-between text-sm mb-1">
              <p className="">VISA fees</p>
              <p className="text-white">
                <span className="text-sm font-thin">₹</span>&nbsp;3600
              </p>
            </div>
            <div className="flex w-full justify-between text-sm mb-1">
              <p className="">SMV service charges</p>
              <p className="text-white">
                <span className="text-sm font-thin">₹</span>&nbsp;2000
              </p>
            </div>
          </div>
          <div className="p-4 bg-green-700 w-full text-white font-thin text-sm flex justify-end">
            <p className="">* € 560 as per current conversion</p>
          </div>
        </div>

        <hr className="my-2 shaddow-lg" />

        <div className="p2">
          <h2 className="ml-4 mb-1 font-SFpro font-bold text-gray-900">
            Information
          </h2>
          <ul className="w-full whitespace-pre-wrap px-4">
            <li className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
              <a href="#" className="">
                &nbsp;dolore magna aliqua
              </a>
              .
            </li>
            <li className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
              <a href="#" className="">
                &nbsp;dolore magna aliqua
              </a>
              .
            </li>
          </ul>
          <a
            href="#"
            className="block font-SFpro font-bold underline text-blue-400"
          >
            See more details
          </a>

          <button className="w-full bg-green-800 text-white mt-2 rounded-sm py-2">
            Apply Now
          </button>
        </div>
      </div>
      {showLabel && (
        <span className="label">
          <span className="label-icon">
            <i className="far fa-star"></i>
          </span>
          &nbsp; Recommended
        </span>
      )}
    </div>
  );
}

export default Card;
