import React, { Component } from "react";
import PropTypes from "prop-types";

import "./DataItems.css";

class DataItem extends Component {
  render() {
    const { id, voice, text } = this.props.item;

    return (
      <ul>
        <li className="container">
          <div>
            <input type="checkbox" className="regular-checkbox" />
          </div>
          <div>
            <img src="./images/person.svg" alt="avatar" />
          </div>
          <div>
            <p className="voice">{voice}</p>
            <p className="text">{text}</p>
          </div>
          <div className="delete">
            <img
              src="./images/delete.svg"
              alt="delete"
              onClick={this.props.delItem.bind(this, id)}
            />
          </div>
        </li>
      </ul>
    );
  }
}

DataItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default DataItem;
