import React, { useState } from "react";

const Time = (props) => {
  const { onTimeSubmission } = props;
  const [dayInput, setDay] = useState(0);
  const [hourInput, setHour] = useState(0);
  const [minInput, setMinute] = useState(0);

  const handleChange = (e) => {
    e.persist()
    if (e.target.id === "day") setDay(e.target.value);
    if (e.target.id === "hour") setHour(e.target.value);
    if (e.target.id === "minute") setMinute(e.target.value);
  }

  const countTimeInput = () => {
    return dayInput * 86400
  }
  const finalCount = countTimeInput();

  return(
    <div>
      <input id="day" type="number" onChange={(e)=>handleChange(e)}></input>
      <input id="hour" type="number"></input>
      <input id="minute" type="number"></input>
      <br/>
      <button onClick={() => onTimeSubmission(finalCount)}></button>
    </div>
  )
}

export default Time;