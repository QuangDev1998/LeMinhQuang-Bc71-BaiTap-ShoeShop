import React, { Component } from "react";

export default class ItemShoe extends Component {
  render() {
    let { data, handleWatchDetail, handleBuyShoe } = this.props;
    let { image, name } = data;
    return (
      <div className="col-3">
        <div class="card text-start">
          <img className="w-100" class="card-img-top" src={image} alt="Title" />
          <div class="card-body">
            <h4 class="card-title">{name}</h4>
            <button
              onClick={() => {
                handleWatchDetail(data);
              }}
              className="btn btn-dark"
            >
              Xem
            </button>
            <button
              onClick={() => {
                handleBuyShoe(data);
              }}
              className="btn btn-danger"
            >
              Mua
            </button>
          </div>
        </div>
      </div>
    );
  }
}
