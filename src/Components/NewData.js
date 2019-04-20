import React, { Component } from "react";

import "./DataItems.css";

class NewData extends Component {
  render() {
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
            <input
              type="text"
              className="voice"
              placeholder="Add new voice..."
            />
            <input type="text" className="text" placeholder="Add new text..." />
          </div>
          <div className="delete">
            <img src="./images/delete.svg" alt="delete" />
          </div>
        </li>
      </ul>
    );
  }
}

export default NewData;