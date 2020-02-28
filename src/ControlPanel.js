import React from "react";
import DatePicker from "react-datepicker";

function ControlPanel({ total, startDate, onChange }) {
  return (
    <div className="control-panel">
      <h3>Taxis Availability</h3>
      <h4>Total Taxi: {total}</h4>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={60}
        timeCaption="time"
        dateFormat="yyyy MMMM dd, hh:mm aa"
      />
    </div>
  );
}

export default ControlPanel;
