import React, { useState, useEffect } from "react";
import DeckGL from "@deck.gl/react";
import { LineLayer } from "@deck.gl/layers";
import { StaticMap, Marker } from "react-map-gl";
import axios from "axios";

// Set your mapbox access token here

// Viewport settings
const initialViewState = {
  // S'pore Area
  longitude: 103.830392,
  latitude: 1.340863,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

// Data to be used by the LineLayer
// const data = [
//   {
//     sourcePosition: [-122.41669, 37.7853],
//     targetPosition: [-122.41669, 37.781]
//   }
// ];

// DeckGL react component
function App() {
  const [viewport, setViewPort] = useState(initialViewState);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.data.gov.sg/v1/transport/taxi-availability?date_time=2018-03-01T13%3A00%3A00Z"
      );
      setData(result.data.features[0].geometry.coordinates);
    };
    fetchData();
  }, [setData]);

  console.log(JSON.stringify(data.features, null, 2));
  const layers = [new LineLayer({ id: "line-layer", data })];

  return (
    <DeckGL
      initialViewState={initialViewState}
      controller={true}
      layers={layers}
    >
      <StaticMap
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/alfieqashwa/ck73fl8tm0rvg1in02ir6d99n"
      >
        {/* {data.map((taxi, i) => (
          <Marker key={i} latitude={taxi[0]} longitude={taxi[1]}></Marker>
        ))} */}
      </StaticMap>
    </DeckGL>
  );
}

export default App;
