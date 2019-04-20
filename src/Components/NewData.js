import React, { Component } from "react";

import "./DataItems.css";

class NewData extends Component {
  state = {
    voice: "",
    text: ""
  };

  onVoiceChange = e => {
    this.setState({ voice: e.target.value });
  };

  onTextChange = e => {
    this.setState({ text: e.target.value });
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
              placeholder="Add new voice..."
              value={this.state.voice}
              onChange={this.onVoiceChange}
            />
            <input
              type="text"
              className="text"
              placeholder="Add new text..."
              value={this.state.text}
              onChange={this.onTextChange}
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
