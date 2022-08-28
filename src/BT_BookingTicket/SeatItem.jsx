import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
const SeatItem = ({ seatItem }) => {
  const [select, setSelect] = useState(false);
  const { seatDetails } = useSelector((state) => state.seat);
  const dispatch = useDispatch();
  const handleBooking = (booking) => {
    dispatch({ type: "isBooking", booking });
    // setSelect(!select)
  };
  useEffect(() => {
    const index = seatDetails.findIndex((item) => item.name === seatItem.name);
    if (index === -1) {
      setSelect(false);
    } else {
      setSelect(true);
    }
  }, [seatDetails]);

  return (
    <button
      onClick={() => handleBooking(seatItem)}
      style={{ backgroundColor: select ? "#8fee01" : "" }}
      className="seats"
    >
      {seatItem.name}
    </button>
  );
};

export default SeatItem;
