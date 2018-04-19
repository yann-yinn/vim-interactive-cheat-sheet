import React, { Component } from "react";
import SearchForm from "./components/SearchForm";
import CommandList from "./components/CommandList";
import commands from "./config/Commands";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    searched: ""
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Vim commands</h1>
        </header>
        <SearchForm
          onTextChange={value => this.setState({ searched: value })}
        />
        <CommandList commands={commands} searched={this.state.searched} />
      </div>
    );
  }
}

export default App;
