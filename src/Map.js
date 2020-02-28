import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import { singapore } from "./location";

function Map({ data }) {
  const [viewport, setViewport] = useState(singapore);

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      {data.map((taxi, i) => (
        <Marker key={i} longitude={taxi[0]} latitude={taxi[1]}>
          hi
        </Marker>
      ))}
    </ReactMapGL>
  );
}

export default Map;
