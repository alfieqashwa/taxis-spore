import React from "react";
import axios from "axios";

import Map from "./Map";
import ControlPanel from "./ControlPanel";
import { customFormatDate } from "./customFormatDate";

// const YEAR = "2018";
// const MONTH = "10";
// const DAY = "05";
// const HOUR = "05";
// const MINUTE = "00";
// const SECOND = "00";
// const DATE_TIME = `${YEAR}-${MONTH}-${DAY}T${HOUR}%3A${MINUTE}%3A${SECOND}Z`;
const API = "https://api.data.gov.sg/v1/transport/taxi-availability";
// { 2011 - 10 - 05 } T{ 14 }% 3A{ 00 }% 3A{ 00 }Z

function App() {
  const [data, setData] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [startDate, setStartDate] = React.useState(new Date());
  const [query, setQuery] = React.useState("2020-02-20T20%3A20%3A00Z");

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${API}?date_time=${query}`);
      setData(result.data.features[0].geometry.coordinates);
      setTotal(result.data.features[0].properties.taxi_count);
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
      />
    </div>
  );
}
export default App;
