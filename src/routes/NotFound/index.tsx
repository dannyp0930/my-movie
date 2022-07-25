import React from "react";
import NotFoundImage from "../../assets/images/NotFound.png"

function NotFound () {
  return (
    <article
      style={{
        marginTop: "10rem",
        textAlign: "center",
      }}
    >
      <img
        src={NotFoundImage}
        alt="NotFound"
        style={{
          width: "50%",
        }}
      />
    </article>
  )
};

export default NotFound;