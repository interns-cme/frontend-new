import React from "react";
import { DateProps } from "../../models/IDate.model";

const DayOfWeek: React.FC<DateProps> = ({ date }) => {
  const getDayOfWeek = (date: Date) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
  };

  return (
    <div>
      <p>Date: {date.toDateString()}</p>
      <p>Day of the Week: {getDayOfWeek(date)}</p>
    </div>
  );
};

export default DayOfWeek;
