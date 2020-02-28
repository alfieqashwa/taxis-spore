import React from "react";
import axios from "axios";

import Map from "./Map";
import ControlPanel from "./ControlPanel";

const YEAR = "2018";
const MONTH = "10";
const DAY = "05";
const HOUR = "05";
const MINUTE = "00";
const SECOND = "00";
const DATE_TIME = `${YEAR}-${MONTH}-${DAY}T${HOUR}%3A${MINUTE}%3A${SECOND}Z`;
const API = "https://api.data.gov.sg/v1/transport/taxi-availability";
// { 2011 - 10 - 05 } T{ 14 }% 3A{ 00 }% 3A{ 00 }Z

function App() {
  const [data, setData] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [query, setQuery] = React.useState(DATE_TIME);
  const [value, setValue] = React.useState(YEAR);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${API}?date_time=${query}`);
      setData(result.data.features[0].geometry.coordinates);
      setTotal(result.data.features[0].properties.taxi_count);
    };
    fetchData();
  }, [query]);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(`${value}-${MONTH}-${DAY}T${HOUR}%3A${MINUTE}%3A${SECOND}Z`);
    setValue("");
  };

  // console.log(JSON.stringify(totalCount, null, 2));
  return (
    <div style={{ height: "100%", position: "relative" }}>
      <Map data={data} />
      <ControlPanel
        total={total}
        value={value}
        setValue={setValue}
        onChange={handleChange}
        onSubmit={handleSubmit}
        year={YEAR}
        month={MONTH}
        hour={HOUR}
        minute={MINUTE}
        second={SECOND}
      />
    </div>
  );
}
export default App;
