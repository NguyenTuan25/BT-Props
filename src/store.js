import { configureStore } from "@reduxjs/toolkit";
import BookingReducer from "./reducers/bookingReducer";
// tạo ra redux store để lưu trữ state
const store = configureStore({
  reducer: {
    //   khai báo state
    //   count: () => {
    //     return 120;
    //   },
    seat: BookingReducer,
  },
  devTools: true,
});
export default store;
