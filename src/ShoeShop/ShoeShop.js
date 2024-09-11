import React, { Component } from "react";
import { shoeArr } from "./data";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";
import Cart from "./Cart";

export default class ShoeShop extends Component {
  state = {
    shoeArr: shoeArr,
    detailShoe: shoeArr[0],
    cart: [],
  };
  handleViewDetail = (shoe) => {
    this.setState({ detailShoe: shoe });
  };
  handleAddToCart = (shoe) => {
    let cloneCart = [...this.state.cart];
    // th1 : sp chưa có trong giỏ hàng => push

    let index = cloneCart.findIndex((item) => item.id == shoe.id);
    if (index == -1) {
      // findindex : nếu không tìm thấy sẽ trả về -1
      let newShoe = { ...shoe, soLuong: 1 };
      cloneCart.push(newShoe);
    } else {
      cloneCart[index].soLuong = cloneCart[index].soLuong + 1;
    }
    // th2 : sản phẩm đã có trong giỏ hàng =>ko push
    // cloneCart.push(shoe);
    this.setState({ cart: cloneCart });
  };
  handleDelete = (idShoe) => {
    let cloneCart = this.state.cart.filter((item) => item.id !== idShoe);

    this.setState({ cart: cloneCart });
  };
  handleChangeAmount = (idShoe, option) => {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => item.id == idShoe);
    cloneCart[index].soLuong = cloneCart[index].soLuong + option;
    if (cloneCart[index].soLuong == 0) {
      cloneCart.splice(index, 1);
    }
    this.setState({ cart: cloneCart });
  };
  render() {
    return (
      <div className="row">
        <ListShoe
          handleBuy={this.handleAddToCart}
          handleViewDetail={this.handleViewDetail}
          list={this.state.shoeArr}
        />
        <Cart
          handleChangeAmount={this.handleChangeAmount}
          handleRemove={this.handleDelete}
          cart={this.state.cart}
        />
        <DetailShoe detail={this.state.detailShoe} />
      </div>
    );
  }
}
