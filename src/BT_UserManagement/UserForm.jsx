import React, { Component } from "react";
import axios from "axios";

export default class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // values: dùng để lưu trữ giá trị của các input
      values: {
        Tk: "",
        HoTen: "",
        Mk: "",
        SDT: "",
        Email: "",
        MLND: "",
      },
    };
  }

  // Bắt sự kiện thay đổi giá trị của input và setState
  handleChange = (evt) => {
    const { value, name } = evt.target;
    // name: name || descrition || price || image

    this.setState((state) => ({
      values: {
        ...state.values,
        [name]: value,
      },
    }));
  };

  // Bắt sự kiện form được submit
  handleSubmit = async (evt) => {
    // Ngăn chặn hành vi reload lại page khi submit form
    evt.preventDefault();
    const { id, ...payload } = this.state.values;
    try {
      if (id) {
        // Cập nhật
        await axios.put(
          `https://62ba6d7a7bdbe01d5288e566.mockapi.io/api/UserManagement/${id}`,
          payload
        );
      } else {
        // Tạo mới
        await axios.post(
          "https://62ba6d7a7bdbe01d5288e566.mockapi.io/api/UserManagement",
          payload
        );
      }
      // Call API thành công
      // B1: Reset Form
      this.setState({
        values: {
          Tk: "",
          HoTen: "",
          Mk: "",
          SDT: "",
          Email: "",
          MLND: "",
        },
      });
      // B2: Bởi vì khi call API thêm sản phẩm, dữ liệu chỉ mới được thay đổi ở phía server, để UI được cập nhật ta cần gọi lại API get products, tuy nhiên API này đã được viết ở component ProductManagement => ta chỉ cần truyền 1 tín hiệu lên component ProductManagement để nó gọi lại API get products
      this.props.onSuccess();
    } catch (error) {
      console.log(error);
    }
  };
  componentDidUpdate(prevProps, prevState) {
    // Bởi vì componentDidUpdate sẽ tự động được thực thi khi state hoặc props thay đổi
    // Kiểm tra nếu prop product thay đổi, setState lại cho values bằng giá trị mới của prop product
    if (this.props.user && this.props.user !== prevProps.user) {
      this.setState({ values: { ...this.props.user } });
    }
  }

  render() {
    const { values } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Name */}
        <div className="mb-3">
          <label htmlFor="Tk" className="form-label">
            Tài Khoản
          </label>
          <input
            id="Tk"
            className="form-control"
            value={values.Tk}
            name="Tk"
            onChange={this.handleChange}
          />
        </div>
        {/* Description */}
        <div className="mb-3">
          <label htmlFor="HoTen" className="form-label">
            Họ Tên
          </label>
          <input
            id="HoTen"
            className="form-control"
            value={values.HoTen}
            name="HoTen"
            onChange={this.handleChange}
          />
        </div>
        {/* Image */}
        <div className="mb-3">
          <label htmlFor="Mk" className="form-label">
            Mật khẩu
          </label>
          <input
            id="Mk"
            type="password"
            className="form-control"
            value={values.Mk}
            name="Mk"
            onChange={this.handleChange}
          />
        </div>
        {/* Price */}
        <div className="mb-3">
          <label htmlFor="SDT" className="form-label">
            Số điện thoại
          </label>
          <input
            id="SDT"
            className="form-control"
            value={values.SDT}
            name="SDT"
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email
          </label>
          <input
            id="Email"
            className="form-control"
            value={values.Email}
            name="Email"
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="SDT" className="form-label">
            Loại Người dùng
          </label>
          <select
            className="form-select "
            onChange={this.handleChange}
            name="MLND"
            id="MLND"
          >
            <option value="Khách hàng">Khách hàng</option>
            <option value="Nhân viên">Nhân viên</option>
          </select>
        </div>
        {/* Submit */}
        <button className="btn btn-dark">Đăng kí</button>
        <button className="btn btn-red">Cập nhật</button>
      </form>
    );
  }
}
