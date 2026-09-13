import React, { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Memes = () => {
  const [memes, setMemes] = useState(null);
  useEffect(() => {
    fetchMemes();
  }, []);

  const fetchMemes = async () => {
    const res = await fetch("https://meme-api.com/gimme/20");
    const json = await res.json();
    console.log(json);
    setMemes(json.memes);
  };
  return (
    <div className="flex flex-wrap">
      {!memes ? (
        <Shimmer />
      ) : (
        memes.map((meme, index) => {
          return <MemeCard key={index} memeData={meme} />;
        })
      )}
    </div>
  );
};

export default Memes;
