import React from "react";
import { useState, useEffect } from "react";
import TrendingNowCards from "./TrendingNowCards";
import { topRated } from "../../Utils/http.utils";
import TopRatedSlider from "./TopRatedSlider";

const Slider = () => {
  const TopRated = () => {
    const [topRated, setTopRated] = useState([]);

    const dataFetcher = async () => {
      try {
        const raw = await topRated.get("movie/popular");
        setTopRated(raw.data.results);
      } catch (e) {
        console.log(e);
      }
    };
    useEffect(() => {
      dataFetcher();
    }, []);
    console.log(topRated);
  };
  return (
    <div className="grid grid-cols-6 gap-2 border-2 border-[white] ">
      {/* {topRated.map((topRated) => (
        <TopRatedSlider key={topRated.id} {...topRated} />
      ))} */}

      <div className="flex flex-col">
        <h3 className="flex text mx-auto gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
            />
          </svg>
          Trending Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
            />
          </svg>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-scroll gap-6 items-center px-3 border-2 border-black h-[230px]">
          <TrendingNowCards />
          <TrendingNowCards />
          <TrendingNowCards />
          <TrendingNowCards />
        </div>
      </div>
    </div>
  );
};

export default Slider;
