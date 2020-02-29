import React from "react";
import DatePicker from "react-datepicker";

function ControlPanel({
  total,
  startDate,
  onChange,
  onSubmit,
  isLoading,
  isError
}) {
  return (
    <div className="control-panel">
      <h3>Taxis Availability</h3>
      <h4>Country: Singapore</h4>
      {isLoading ? (
        <h4 style={{ color: "tomato" }}>Loading...</h4>
      ) : (
        <h4>Total Taxi: {total}</h4>
      )}
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
      {isError && (
        <div style={{ textAlign: "center", color: "red" }}>
          <h2>Something went wrong ...</h2>
          <p>Please input between 2016 to today!</p>
        </div>
      )}
      <footer className="footer">
        <div className="container taCenter">
          <span>
            <a
              href="https://alfieqashwa.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              alfieqashwa
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default ControlPanel;
