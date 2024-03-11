import React from "react";

const Card = () => {
  return (
    <div className="shadow-md shadow-black/15 w-[15rem] h-[12rem]  cardbg rounded-xl items-center m-auto flex justify-center">
      {" "}
      <img
        src="videoPlayer.png"
        className="w-[5rem] items-center m-auto"
        alt="player"
      />{" "}
    </div>
  );
};

export default Card;
