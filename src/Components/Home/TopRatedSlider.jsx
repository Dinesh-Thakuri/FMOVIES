import React from "react";
import TrendingNowCards from "./TrendingNowCards";

export default function TopRatedSlider() {
  return (
    <div>
      <div className=" border-2 border-blue-500 ">
        <div className="w-1/2 mt-[150px]">
          <h1 className="text-h font-semibold">Movie Title</h1>
          <p className="text-gray">
            Meta Datas Meta Datas Meta DatasMeta Datas Meta Datas Meta Datas
            Meta Datas
          </p>
          <p>
            Movie Description Movie Description Movie Description Movie
            Description{" "}
          </p>
          <div className="flex gap-x-4 p-4">
            <button className="bg-theme text-[black] px-3 py-2 font-semibold rounded-full">
              Watch now
            </button>
            <button>Bookmark</button>
          </div>
        </div>
      </div>
    </div>
  );
}
