import React, { Component } from "react";
import SearchForm from "./components/SearchForm";
import Container from "./components/Container";
import CommandList from "./components/CommandList";
import Header from "./components/Header";
import ForkMe from "./components/ForkMe";
import commands from "./config/Commands";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  state = {
    searched: ""
  };
  render() {
    return (
      <div className="App">
        <ForkMe
          url={"https://github.com/nyl-auster/vim-interactive-cheat-sheet"}
        />
        <Header />
        <Container>
          <div style={{ textAlign: "center" }}>
            <em>search within {commands.length} useful vim commands </em> 🤗
          </div>
        </Container>
        <SearchForm
          onTextChange={value => this.setState({ searched: value })}
        />
        <Container>
          {/*
          <div style={{ padding: "10px", textAlign: "center" }}>
            <em>
              All this commands are for <strong>normal (command) mode.</strong>{" "}
              <br />
              Press <strong>{"<ESC>"}</strong> first if your are in "insert" or
              "visual" mode.
            </em>
          </div>
          */}
          <CommandList commands={commands} searched={this.state.searched} />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
