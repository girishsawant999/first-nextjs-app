import React from "react";

const InformationDetails = () => {
  return (
    <>
      <h1 className="text-2xl font-SFpro font-bold mb-3 mt-4">Information</h1>
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
    </>
  );
};

const AdditionDocsRequired = () => {
  return (
    <>
      <h1 className="text-2xl font-SFpro font-bold mb-3 mt-4">
        Additional Docs Required
      </h1>
      <p className="mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
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
    </>
  );
};

function DocsInfoRequired(props) {
  return (
    <>
      <h1 className="text-2xl font-SFpro font-bold mb-3">Docs required</h1>
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <InformationDetails />
      <AdditionDocsRequired />
    </>
  );
}

export default DocsInfoRequired;
