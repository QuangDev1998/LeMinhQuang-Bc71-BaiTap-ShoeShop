import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    let { cart, handleRemove, handleChangeAmount } = this.props;
    return (
      <div className="col-6">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleChangeAmount(item.id, -1);
                      }}
                      className="btn btn-dark"
                    >
                      -
                    </button>
                    <strong className="mx-3">{item.soLuong}</strong>
                    <button
                      onClick={() => {
                        handleChangeAmount(item.id, 1);
                      }}
                      className="btn btn-danger"
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <img style={{ width: 50 }} src={item.image} alt="" />
                  </td>
                  <td>{item.price * item.soLuong}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleRemove(item.id);
                      }}
                      className="btn btn-dark"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {this.props.cart.length === 0 && (
          <h3 className="text-center">No items to display</h3>
        )}
      </div>
    );
  }
}
