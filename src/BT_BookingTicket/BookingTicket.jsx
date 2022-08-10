// import React, { Component } from "react";
// import scss from "./style.module.scss";
// import HangGhe from "./HangGhe";
// import ThongTinGhe from "./ThongTinGhe";
// import danhSachGhe from "./danhSachGhe.json";
// export default class BookingTicket extends Component {
//   renderHangGhe = () => {
//     return danhSachGhe.map((hangGhe, index) => {
//       return (
//         <div key={index}>
//           <HangGhe hangGhe={hangGhe} soHangGhe={index} />
//         </div>
//       );
//     });
//   };
//   render() {
//     return (
//       <div className={scss.bg}>
//         <div className={scss.bgrgba}></div>
//         <div className={scss.containerposition}>
//           <div className="container">
//             <div className="row">
//               <div className="col-8 text-center">
//                 <div className="text-warning">
//                   ĐẶT VÉ XEM PHIM CYBERLEARN.VN
//                 </div>
//                 <div className="text-success">Màn Hình</div>{" "}
//                 <div
//                   className="mt-3"
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     flexDirection: "row",
//                   }}
//                 >
//                   <div className="screen"></div>
//                 </div>
//                 <div className="container chairs">{this.renderHangGhe()}</div>
//               </div>
//               <div className="col-4">
//                 <div className="text-success">Danh sách ghế đã chọn</div>
//                 <ThongTinGhe />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
