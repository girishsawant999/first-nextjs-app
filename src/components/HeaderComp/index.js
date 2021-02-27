import React from "react";

const MenuTabs = () => {
  return (
    <div className="flex overflow-y-auto pl-4 py-3 whitespace-nowrap">
      <span className="mx-3 font-SFpro font-bold text-green-800">
        Visa Types
      </span>
      <span className="mx-3 font-SFpro font-bold text-gray-400">
        Docs Required
      </span>
      <span className="mx-3 font-SFpro font-bold text-gray-400">
        Additional Docs Required
      </span>
      <span className="mx-3 font-SFpro font-bold text-gray-400">
        Docs Required
      </span>
      <span className="mx-3 font-SFpro font-bold text-gray-400">
        Additional Docs Required
      </span>
      <span className="mx-3 font-SFpro font-bold text-gray-400">
        Docs Required
      </span>
      <span className="mx-3 font-SFpro font-bold text-gray-400">
        Additional Docs Required
      </span>
    </div>
  );
};

function Header(props) {
  return (
    <>
      <div className="img-container relative">
        <div
          className="w-full bg-cover h-48"
          style={{
            background:
              'url("https://source.unsplash.com/1366x768/?Singapore,city,buildings")',
          }}
        ></div>
        <span className="bg-black absolute flex items-center justify-center left-6 opacity-60 p-3 rounded-full text-white top-20">
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </span>
      </div>
      <div className="bg-white shadow-lg pt-6">
        <div className="px-6">
          <h1 className="font-SFpro font-bold text-gray-900 mb-3 text-3xl">
            Singapore
          </h1>
          <p className="font-SFpro text-gray-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <label
            htmlFor="Purposeoftravel"
            className="block mt-4 text-gray-500 text-sm"
          >
            Purpose of travel
          </label>
          <select
            id="Purposeoftravel"
            name="Purposeoftravel"
            className="bg-gray-100 border mt-2 px-2 w-2/4 outline-none"
          >
            <option value="1">Buisness</option>
            <option value="2">Purpose 2</option>
            <option value="3">Purpose 3</option>
            <option value="4">Purpose 4</option>
          </select>
        </div>
        <hr className="border-gray-300 mt-4" />

        <MenuTabs />
      </div>
    </>
  );
}

export default Header;
