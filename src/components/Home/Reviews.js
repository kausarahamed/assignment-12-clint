import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Reviews = () => {
  const [reviwe, setreviwe] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/addreview`)
      .then((response) => response.json())
      .then((data) => setreviwe(data));
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-10 pt-7 pb-14 px-10">
      {reviwe.map((reviwe) => (
        <div className="bg-white rounded-xl py-2">
          <h2 className="font-bold text-lg px-5 pb-2">{reviwe.name}</h2>
          <p className="px-5 pb-3 text-justify">{reviwe.comment}</p>
          <div className="px-5">
            <div className="flex justify-start items-center text-bold font-serif">
              <p>Ratting: </p>
              <p>
                <Rating
                  readonly
                  initialRating={reviwe.ratting}
                  emptySymbol={<AiOutlineStar color="orange" size={"15px"} />}
                  fullSymbol={<AiFillStar color="orange" size={"15px"} />}
                />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
