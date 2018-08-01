import React, { Component } from "react";
import CommandsList from "./CommandsList";
import CommandsQuery from "./CommandsQuery";
import SearchForm from "./SearchForm";
import NoResult from "./NoResult";

class CommandsWithSearch extends Component {
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
        <CommandsQuery search={this.state.search}>
          {commands => {
            if (commands.length > 0) {
              return <CommandsList commands={commands} />;
            }
            return <NoResult />;
          }}
        </CommandsQuery>
      </div>
    );
  }
}

export default CommandsWithSearch;
