// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { actDatGhe } from "../reducers/action";
// class HangGhe extends Component {
//   renderGhe = () => {
//     return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
//       let cssGheDaDat = "";
//       let disabled = false;
//       if (ghe.booked) {
//         cssGheDaDat = "gheDuocChon";
//         disabled = true;
//       }
//       let cssGheDangDat = "";
//       let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
//         (item) => item.name === ghe.name
//       );
//       if (indexGheDangDat !== -1) {
//         cssGheDangDat = "gheDangChon";
//       }
//       return (
//         <button
//           disabled={disabled}
//           className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
//           key={index}
//           onClick={() => {
//             this.props.datGhe(ghe);
//           }}
//         >
//           {ghe.name}
//         </button>
//       );
//     });
//   };
//   renderSoHang = () => {
//     return this.props.hangGhe.danhSachGhe.map((hang, index) => {
//       return (
//         <button className="rowNumber" key={index}>
//           {hang.name}
//         </button>
//       );
//     });
//   };
//   renderHangGhe = () => {
//     if (this.props.soHangGhe === 0) {
//       return <div className="m1-1">{this.renderSoHang()}</div>;
//     } else {
//       return (
//         <div>
//           {this.props.hangGhe.hang}
//           {this.renderGhe()}
//         </div>
//       );
//     }
//   };
//   render() {
//     return (
//       <div className="text-light text-left ml-5, mt-3">
//         {this.renderHangGhe()}
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     danhSachGheDangDat: state.BookingTicket.danhSachGheDangDat,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     datGhe: (ghe) => {
//       dispatch(actDatGhe(ghe));
//     },
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
