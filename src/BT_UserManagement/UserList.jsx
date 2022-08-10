import React, { Component } from "react";
import axios from "axios";

export default class UsertList extends Component {
  handleDelete = async (userId) => {
    try {
      // Call API xoá sản phẩm
      await axios.delete(
        `https://62ba6d7a7bdbe01d5288e566.mockapi.io/api/UserManagement/${userId}`
      );
      // Thành công, gọi tới prop onDeleteSuccess để chạy lại hàm fetchProducts ở component ProductManagement
      this.props.onDeleteSuccess();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { users } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Số thứ tự</th>
            <th>Tài Khoản</th>
            <th>Họ Tên</th>
            <th>Mật khẩu</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Loại Người dùng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.Tk}</td>
                <td>{user.HoTen}</td>
                <td>{user.Mk}</td>
                <td>{user.Email}</td>
                <td>{user.SDT}</td>
                <td>{user.MLND}</td>
                <td>
                  <button
                    onClick={() => this.props.onSelectUser(user.id)}
                    className="btn btn-success me-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => this.handleDelete(user.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
