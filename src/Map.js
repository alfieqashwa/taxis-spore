import React, { useState } from "react";
// import DeckGL from "@deck.gl/react";
import ReactMapGL, { Marker } from "react-map-gl";
import { singapore } from "./location";

function Map({ data }) {
  const [viewport, setViewport] = useState(singapore);

  // console.log(viewport);
  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      // mapStyle="mapbox://styles/alfieqashwa/ck73fl8tm0rvg1in02ir6d99n"
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      {data.map((taxi, i) => (
        <Marker key={i} longitude={taxi[0]} latitude={taxi[1]}>
          <span role="img" aria-label="sheep">
            🐑
          </span>
        </Marker>
      ))}
    </ReactMapGL>
  );
}

export default Map;
