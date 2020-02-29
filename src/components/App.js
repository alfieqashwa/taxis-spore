import React, { useState } from "react";
import axios from "axios";

import Map from "./Map";
import ControlPanel from "./ControlPanel";
import { customFormatDate } from "../utils/customFormatDate";

const API = "https://api.data.gov.sg/v1/transport/taxi-availability";
const initialQuery = "2020-02-20T20%3A20%3A00Z";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [total, setTotal] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [query, setQuery] = useState(initialQuery);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(`${API}?date_time=${query}`);
        setData(result.data.features[0].geometry.coordinates);
        setTotal(result.data.features[0].properties.taxi_count);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [query]);

  const onSubmit = e => {
    e.preventDefault();
    const format = customFormatDate(startDate);
    setQuery(format);
  };

  // console.log(JSON.stringify(data, null, 2));
  return (
    <div style={{ height: "100%", position: "relative" }}>
      <Map data={data} />
      <ControlPanel
        total={total}
        startDate={startDate}
        onChange={date => setStartDate(date)}
        onSubmit={onSubmit}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
}

export default App;
