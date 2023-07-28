import React from "react";
import Slider from "../Components/Home/Slider";
import Top9Card from "../Components/Home/top9Card";
import RecommendedCard from "../Components/Home/RecommendedCard";

const Home = () => {
  return (
    <div className="">
      <Slider />
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className=" md:col-span-3">
          <h1 className="text-hh font-bold">Recommended</h1>
          <div className="">
            <RecommendedCard />
          </div>
        </div>
        <div className="">
          <div className="">
            <h1>Top 9</h1>
            <div>
              <Top9Card />
              <Top9Card />
              <Top9Card />
              <Top9Card />
              <Top9Card />
              <Top9Card />
              <Top9Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* <Slider />

      <div className="grid grid-cols-4 p-4">
        <div className="col-span-3 border-2 border-[white]">
          <div className="">
            <h1 className="text-hh font-bold">Recommended</h1>
            <div className="">
              <RecommendedCard />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <h1>Top 9</h1>
            <div>
              <Top9Card />
              <Top9Card />
              <Top9Card />
              <Top9Card />
              <Top9Card />
              <Top9Card />
              <Top9Card />
            </div>
          </div>
          <div>
            <h1>Recently Updated</h1>
          </div>
        </div>
      </div> */
}
