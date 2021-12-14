import React from "react";

const PhotoComponent = (props) => {
  return (
    <div>
      <img
        src={props.image}
        className="rounded mx-auto d-block photo"
        alt={props.name}
      ></img>
    </div>
  );
};

export default PhotoComponent;
