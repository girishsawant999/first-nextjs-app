import React from "react";
import Collapsible from "react-collapsible";

const CollapsibleQueList = () => {
  return (
    <Collapsible
      trigger={
        <div className="w-11/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
      }
    >
      <p>
        This is the collapsible content. It can be any element or React
        component you like.
      </p>
      <p>
        It can even be another Collapsible component. Check out the next
        section!
      </p>
      <span className="collapse-icon"></span>
    </Collapsible>
  );
};

function FrequentlyAskedQueComp(props) {
  return (
    <>
      <h1 className="text-2xl text-black font-SFpro font-bold mb-3">
        Frequently Asked Questions
      </h1>
      <CollapsibleQueList />
      <CollapsibleQueList />
      <CollapsibleQueList />
      <CollapsibleQueList />
    </>
  );
}

export default FrequentlyAskedQueComp;
