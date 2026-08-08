import { useState } from "react";

const StarRatings = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleRating(index) {
    setRating(index);
  }

  function handleMouseEnter(index) {
    setHover(index);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <span className="text-sm font-medium text-neutral-500">
        Rate this product
      </span>
      <div className="flex gap-2 bg-white px-6 py-3 rounded-2xl shadow-md">
        {[...Array(totalStars)].map((_, index) => {
          //_ here indicates unused variable, its value will be undefined, we are only interested in the index
          index += 1;
          return index <= (hover || rating) ? (
            <img
              src="src\assets\filledStar.svg"
              alt=""
              key={index}
              onClick={() => handleRating(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
            />
          ) : (
            <img
              src="src\assets\star.svg"
              alt=""
              key={index}
              onClick={() => handleRating(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarRatings;
