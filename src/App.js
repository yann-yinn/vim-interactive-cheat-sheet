import React, { Component } from "react";
import SearchForm from "./components/SearchForm";
import CommandList from "./components/CommandList";
import Header from "./components/Header";
import commands from "./config/Commands";

class App extends Component {
  state = {
    searched: ""
  };
  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm
          onTextChange={value => this.setState({ searched: value })}
        />
        <CommandList commands={commands} searched={this.state.searched} />
      </div>
    );
  }
}

export default App;
