import React, { Component } from "react";
import axios from "axios";

import { API_URL } from "./config";

import NavBar from "./Components/NavBar";
import Data from "./Components/Data";
import Add from "./Components/Add";
import Spinner from "./Components/Spinner";
import NewData from "./Components/NewData";

class App extends Component {
  state = {
    items: [],
    isLoaded: false,
    addItem: false
  };

  // Get request from API
  getData = () => {
    axios.get(API_URL).then(res => {
      console.log("AXIOS Response: ", res);
      const items = res.data;
      this.setState({
        items: items,
        isLoaded: true
      });
    });
  };

  // Delete item from State
  delItem = id => {
    this.setState({
      items: [...this.state.items.filter(item => item.id !== id)]
    });
  };

  // Add item to State
  onAddSubmit = e => {
    this.setState({ items: [...this.state.items, e], addItem: false });
  };

  // Toggle NewData Component
  addItem = () => {
    this.setState({ addItem: true });
  };

  // Delete before last commit
  componentDidUpdate(e) {
    console.log("Component Update: ", this.state);
  }

  render() {
    return (
      <div className="App">
        <NavBar getData={this.getData} />
        {this.state.isLoaded ? (
          <Data items={this.state.items} delItem={this.delItem} />
        ) : (
          <Spinner />
        )}
        {this.state.addItem ? (
          <NewData onSubmit={this.onAddSubmit} id={this.state.items} />
        ) : null}
        {this.state.isLoaded ? <Add addItem={this.addItem} /> : null}
      </div>
    );
  }
}

export default App;
