import { loadCSS } from "fg-loadcss";
import { useEffect } from "react";

// Components
import Header from "../components/HeaderComp";
import Card from "../components/Card";
import DocsInfoRequired from "../components/DocsRequiredInfoComp";
import FrequentlyAskedQue from "../components/FrequentlyAskedQueComp";
import Disclaimer from "../components/DisclaimerComp";

const Home = () => {
  useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <div className="w-screen bg-gray-100 pb-4">
      <Header />
      <div className="card-container py-5 px-2 flex overflow-y-auto whitespace-nowrap">
        <Card showLabel={true} />
        <Card />
        <Card showLabel={true} />
        <Card />
        <Card />
      </div>

      <div className="px-6 text-gray-800">
        <DocsInfoRequired />
      </div>

      <div className="px-6 text-gray-800">
        <FrequentlyAskedQue />
      </div>

      <div className="px-6">
        <Disclaimer />
      </div>
    </div>
  );
};
export default Home;
