import React from "react";
import PropTypes from "prop-types";
import "./CommandList.css";

export default class CommandList extends React.Component {
  static propTypes = {
    searched: PropTypes.string.isRequired
  };
  render() {
    const { commands } = this.props;
    return (
      <div className="CommandList">
        <table>
          {/*
          <thead>
            <th>label</th>
            <th>mode</th>
            <th>command</th>
            <th>description</th>
          </thead>
          */}
          {/*commands.length + "commandes" */}
          <tbody>
            {commands
              .filter(
                command => command.keywords.indexOf(this.props.searched) !== -1
              )
              .map((command, index) => {
                return (
                  <tr key={index}>
                    <td>{command.label}</td>
                    <td className="command">{command.command}</td>
                    <td className="description">{command.description}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
