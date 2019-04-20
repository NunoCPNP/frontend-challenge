import React, { Component } from "react";

import "./DataItems.css";

class NewData extends Component {
  state = {
    voice: "",
    text: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

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
              name="voice"
              placeholder="Add new voice..."
              value={this.state.voice}
              onChange={this.onChange}
            />
            <input
              type="text"
              className="text"
              name="text"
              placeholder="Add new text..."
              value={this.state.text}
              onChange={this.onChange}
            />
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
