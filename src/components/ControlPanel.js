import React from "react";
import DatePicker from "react-datepicker";

function ControlPanel({ total, startDate, onChange, onSubmit }) {
  return (
    <div className="control-panel">
      <h3>Taxis Availability</h3>
      <h4>Total Taxi: {total}</h4>
      <form onSubmit={onSubmit}>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          // disabledKeyboardNavigation
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={60}
          timeCaption="time"
          dateFormat="yyyy MM dd, hh:mm aa"
        />
        <button type="submit">Submit Date</button>
      </form>
    </div>
  );
}

export default ControlPanel;
