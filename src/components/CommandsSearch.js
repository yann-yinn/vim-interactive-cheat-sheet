import React, { Component } from "react";
import CommandsList from "./CommandsList";
import CommandsFiltered from "./CommandsFiltered";
import SearchForm from "./SearchForm";
import commands from "../commands";
import Container from "./Container";
import NoResult from "./NoResult";

class CommandSearch extends Component {
  state = {
    search: ""
  };
  handleTextChange = value => {
    this.setState({ search: value });
  };
  render() {
    return (
      <div>
        <SearchForm onTextChange={this.handleTextChange} />
        <CommandsFiltered search={this.state.search}>
          {commands => {
            if (commands.length > 0) {
              return <CommandsList commands={commands} />;
            }
            return <NoResult />;
          }}
        </CommandsFiltered>
      </div>
    );
  }
}

export default CommandSearch;
