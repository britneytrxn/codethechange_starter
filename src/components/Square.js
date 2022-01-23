import React from "react";

const Square = ({value, onClick}) => {
  return (
    // Creates clickable square that contains Y or O
	<button className="squares" onClick={onClick}>{value}</button>
  );
};

export default Square;
