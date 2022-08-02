import React, { Component } from "react";
import axios from "axios";
import UserForm from "./UserForm";
import UserList from "./UserList";

export default class ProductManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // products: chứa thông tin danh sách sản phẩm
      users: [],
      // selectedProduct: chứa thông tin sản phẩm cần cập nhật
      selectedUser: null,
    };
  }

  fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://62ba6d7a7bdbe01d5288e566.mockapi.io/api/UserManagement"
      );
      // Call API thành công
      this.setState({ users: data });
    } catch (error) {
      console.log(error);
    }
  };
  fetchUserDetails = async (userId) => {
    try {
      // Call API get product details
      const { data } = await axios.get(
        `https://62ba6d7a7bdbe01d5288e566.mockapi.io/api/UserManagement/${userId}`
      );
      // Thành công
      this.setState({ selectedUser: data });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center text-primary">User Management</h1>

        <div className="card mb-5">
          <div className="card-header bg-dark text-white">
            <strong>User Form</strong>
          </div>
          <div className="card-body">
            <UserForm
              user={this.state.selectedUser}
              onSuccess={this.fetchUsers}
            />
          </div>
        </div>

        <UserList
          users={this.state.users}
          onDeleteSuccess={this.fetchUsers}
          onSelectProduct={this.fetchUserDetails}
        />
      </div>
    );
  }
}
