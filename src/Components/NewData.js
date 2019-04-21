import React, { Component } from "react";

import "./DataItems.css";

class NewData extends Component {
  state = {
    voice: "",
    text: ""
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
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
              onChange={e => this.setState({ voice: e.target.value })}
            />
            <input
              type="text"
              className="text"
              name="text"
              placeholder="Add new text..."
              value={this.state.text}
              onChange={e => this.setState({ text: e.target.value })}
            />
          </div>
          <div className="delete">
            <img src="./images/delete.svg" alt="delete" />
          </div>
          <button type="submit" value="submit" />
        </li>
      </form>
    );
  }
}

export default NewData;
