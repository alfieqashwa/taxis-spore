import React from "react";
import axios from "axios";

import Map from "./Map";

const API =
  "https://api.data.gov.sg/v1/transport/taxi-availability?date_time=2018-03-01T13%3A00%3A00Z";

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(API);
      setData(result.data.features[0].geometry.coordinates);
    };
    fetchData();
  }, []);

  // console.log(JSON.stringify(data, null, 2));
  return (
    <>
      <Map data={data} />
    </>
  );
}
export default App;
