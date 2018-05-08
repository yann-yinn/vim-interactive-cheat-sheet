import React, { Component } from "react";
import commands from "./commands";
import Header from "./components/Header";
import ForkMe from "./components/ForkMe";
import Footer from "./components/Footer";
import CommandsSearch from "./components/CommandsSearch";
import Container from "./components/Container";
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
          <CommandsSearch />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
