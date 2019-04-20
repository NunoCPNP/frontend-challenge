import React, { Component } from "react";

import "./Add.css";

export default class Add extends Component {
  render() {
    return (
      <div className="add">
        <img
          src="./images/add-row.svg"
          alt="add"
          onClick={this.props.addItem}
        />
      </div>
    );
  }
}
