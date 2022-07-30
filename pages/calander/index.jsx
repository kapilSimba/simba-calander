import React, {useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


export default function Calander({column}) {
  const [value, onChange] = useState(new Date());


  return (
    <div className=" flex h-[60vh] bg-blue-800 mr-8">
      <Calendar onChange={onChange} value={value} />
    
    </div>
  );
}
