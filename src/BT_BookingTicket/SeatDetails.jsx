import React from "react";
import { useSelector, useDispatch } from "react-redux";
const SeatDetails = () => {
  const dispatch = useDispatch((state) => state.seat);
  const { seatDetails } = useSelector((state) => state.seat);
  if (!seatDetails) {
    return null;
  }
  const handleDelete = (seat) => {
    dispatch({ type: "isBooking", booking: seat });
  };
  // Tính tổng tiền vé
  const total = seatDetails.reduce((total, value) => {
    return (total += value.price);
  }, 0);

  return (
    <>
      <div className="text-center text-danger">
        <h3>Ghế đã chọn</h3>
      </div>
      <table className="table text-light">
        <thead>
          <tr>
            <th className="text-danger">Số ghế</th>
            <th className="text-danger">Giá</th>
            <th className="text-danger">Hủy</th>
          </tr>
        </thead>
        <tbody>
          {seatDetails.map((seat) => {
            return (
              <tr key={seat.name}>
                <td className="text-danger">{seat.name}</td>
                <td className="text-danger">{seat.price}</td>
                <td>
                  <button
                    className="btn-style"
                    onClick={() => handleDelete(seat)}
                  >
                    Hủy
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h5 className="text-danger">Tổng Tiền : {total} VND</h5>
    </>
  );
};

export default SeatDetails;
