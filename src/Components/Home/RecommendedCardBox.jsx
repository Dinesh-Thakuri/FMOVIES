import React from "react";

const getPosterURL = (path) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${path}`;
};

const RecommendedCardBox = ({
  title,
  poster_path,
  released_date,
  movie_length,
  vote_average,
}) => {
  return (
    <div className="border-2 border-[white] w-[180px]">
      <img
        src={getPosterURL(poster_path)}
        alt="Movie Image"
        className="w-[180px]"
      />
      <div>
        <div className="flex justify-between">
          <p>2023</p>
          <p className="border px-1 border-gray rounded-full">Movie</p>
          <p>94 mins</p>
        </div>
        <h4 className="">{title}</h4>
      </div>
    </div>
  );
};
export default RecommendedCardBox;
