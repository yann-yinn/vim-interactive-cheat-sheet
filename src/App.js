import React, { Component } from "react";
import SearchForm from "./components/SearchForm";
import Container from "./components/Container";
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
        <Container>
          <div style={{ textAlign: "center" }}>
            <em>search within the {commands.length} commands</em>
          </div>
        </Container>
        <SearchForm
          onTextChange={value => this.setState({ searched: value })}
        />
        <Container>
          <div style={{ padding: "10px" }}>
            <em>
              All this commands supposed you are in{" "}
              <strong>normal (command) mode.</strong> Press {"<ESC>"} first if
              your are in "insert" or "visual" mode.
            </em>
          </div>
          <CommandList commands={commands} searched={this.state.searched} />
        </Container>
      </div>
    );
  }
}

export default App;
