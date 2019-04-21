import React, { Component } from "react";

import styles from "./Add.module.css";

export default class Add extends Component {
  render() {
    return (
      <div className={styles.add}>
        <img
          src="./images/add-row.svg"
          alt="add"
          onClick={this.props.addItem}
        />
      </div>
    );
  }
}
