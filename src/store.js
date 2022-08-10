import { configureStore } from "@reduxjs/toolkit";
import BookingTicket from "./reducers/BookingTicket";
// tạo ra redux store để lưu trữ state
const store = configureStore({
  reducer: {
    // khai báo state
    // count: () => {
    //   return 120;
    // },
    booking: BookingTicket,
  },
});
export default store;
