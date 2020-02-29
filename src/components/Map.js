import React, { useState } from "react";
// import DeckGL from "@deck.gl/react";
import ReactMapGL from "react-map-gl";

import MarkerTaxi from "./MarkerTaxi";
import { singapore } from "../utils/location";

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
      <MarkerTaxi data={data} />
    </ReactMapGL>
  );
}

export default Map;
