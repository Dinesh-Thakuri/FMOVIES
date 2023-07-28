import { useEffect, useState } from "react";
import React from "react";
import { http } from "../../Utils/http.utils";
import RecommendedCardBox from "./RecommendedCardBox";

const RecommendedCard = () => {
  const [nowPlaying, setNowPlaying] = useState([]);

  const dataFetcher = async () => {
    try {
      const raw = await http.get("movie/popular");
      setNowPlaying(raw.data.results);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    dataFetcher();
  }, []);
  // console.log(nowPlaying);

  return (
    <div className="grid grid-cols-6 gap-2 border-2 border-[white] ">
      {nowPlaying.map((movieReq) => (
        <RecommendedCardBox key={movieReq.id} {...movieReq} />
      ))}
    </div>
  );
};

export default RecommendedCard;
