import React, { Component } from "react";

import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul>
          <li>
            <a href="/">Transcriptions</a>
          </li>
          <li>
            <img
              src="./images/fetch-document.svg"
              alt="fetchdataimage"
              onClick={this.props.getData}
            />
          </li>
          <li>
            <img src="./images/upload.svg" alt="uploadimage" />
          </li>
        </ul>
      </nav>
    );
  }
}
