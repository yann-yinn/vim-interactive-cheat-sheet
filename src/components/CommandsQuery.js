import React, { Component } from "react";
import commands from "../commands";
import PropTypes from "prop-types";

/**
 * Get a list of filtered commands from search string
 */
class CommandsQuery extends Component {
  static propTypes = {
    search: PropTypes.string.isRequired
  };
  getFilteredCommands = search =>
    commands.filter(
      command =>
        command.keywords.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  render() {
    return (
      <div>
        {this.props.children(this.getFilteredCommands(this.props.search))}
      </div>
    );
  }
}

export default CommandsQuery;
