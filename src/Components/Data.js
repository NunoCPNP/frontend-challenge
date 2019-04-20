import React, { Component } from "react";
import PropTypes from "prop-types";

import DataItem from "./DataItems";

class Data extends Component {
  render() {
    return this.props.items.map(item => (
      <DataItem key={item.id} item={item} delItem={this.props.delItem} />
    ));
  }
}

Data.propTypes = {
  items: PropTypes.array.isRequired
};

export default Data;
