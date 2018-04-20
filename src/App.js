import React, { Component } from "react";
import SearchForm from "./components/SearchForm";
import CommandList from "./components/CommandList";
import Header from "./components/Header";
import ForkMe from "./components/ForkMe";
import commands from "./config/Commands";

class App extends Component {
  state = {
    searched: ""
  };
  render() {
    return (
      <div className="App">
        <ForkMe url={"https://github.com/nyl-auster/vim-command"} />
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
