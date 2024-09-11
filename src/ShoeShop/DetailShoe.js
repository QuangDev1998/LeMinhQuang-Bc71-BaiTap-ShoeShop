import React, { Component } from "react";

export default class DetailShoe extends Component {
  render() {
    let { name, price, description, quantity } = this.props.detail;
    return (
      <div>
        <h2>Detail</h2>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Stock</th>
                {/* số lượng sp còn trong kho */}
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <td scope="row">{name}</td>
                <td>{price}</td>
                <td>{description}</td>
                <td>{quantity}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
