import React from "react";
import { Marker } from "react-map-gl";
import { ICON, SIZE } from "../utils/icon";

export default ({ data }) => {
  return (
    <>
      {data.map((taxi, i) => (
        <Marker
          key={i}
          longitude={parseFloat(taxi[0])}
          latitude={parseFloat(taxi[1])}
        >
          {/* <span role="img" aria-label="sheep">
            🐑
          </span> */}
          <svg
            height={SIZE}
            viewBox="0 0 24 24"
            style={{
              cursor: "pointer",
              fill: "tomato",
              stroke: "none",
              transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
            }}
          >
            <path d={ICON} />
          </svg>
        </Marker>
      ))}
    </>
  );
};
