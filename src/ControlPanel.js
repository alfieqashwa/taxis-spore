import React from "react";

function ControlPanel({ total, value, onSubmit, onChange }) {
  return (
    <div className="control-panel">
      <h3>Taxis Availability</h3>
      <h4>Total Taxi: {total}</h4>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default ControlPanel;
