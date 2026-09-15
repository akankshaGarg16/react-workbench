import React, { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Memes = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);
  useEffect(() => {
    fetchMemes();

    window.addEventListener("scroll", handleScroll)
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  function handleScroll() {
    // scrollY: how much we've scrolled
    // innerHeight: height of the window(visible section)
    // document.body.scrollHeight: total height of the web page
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMemes();
    }
    }

  const fetchMemes = async () => {
    setShowShimmer(true);
    const res = await fetch("https://meme-api.com/gimme/20");
    const json = await res.json();
    console.log(json);
    setShowShimmer(false);
    setMemes((memes) => [...memes, ...json.memes]);
  };
  return (
    <div className="flex flex-wrap">
      {
        memes.map((meme, index) => {
          return <MemeCard key={index} memeData={meme} />;
        })
      }
      {showShimmer &&  <Shimmer />}
    </div>
  );
};

export default Memes;
