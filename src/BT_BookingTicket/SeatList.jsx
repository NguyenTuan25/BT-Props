import React from "react";
import { useSelector } from "react-redux";
import SeatItem from "./SeatItem";

const SeatList = () => {
  const { seats } = useSelector((state) => state.seat);
  if (!seats) {
    return;
  }

  return (
    <>
      <div className="bg-secondary mx-3 text-center mb-4 text-light">
        <h5>Màn Hình</h5>   
      </div>
        <div className="screen ">   </div>
      <div>
        {seats.map((seat) => {
          return (
            <ul className="row-list" key={seat.row}>        
              <li>{seat.row}</li>
              {seat.seats.map((seats) => {
                return <SeatItem key={seats.name} seatItem={seats} />;
              })}
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default SeatList;
