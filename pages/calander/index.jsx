import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

export default function Calander({ setDate }) {
  const [value, onChange] = useState(new Date());
  const onHandleChange = (date) => {
    onChange(() => date, setDate(date));
  };
  return (
    <>
      <div className="text-white bg-red-400 font-sans font-bold text-[2rem]">
        {moment(value).format("DD/MMMM/YYYY")}
      </div>
      <div className=" flex h-[60vh] bg-blue-800 mr-8">
        <Calendar onClickDay={onHandleChange} value={value} />
      </div>
    </>
  );
}
