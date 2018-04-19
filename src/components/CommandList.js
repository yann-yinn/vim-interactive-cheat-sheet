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
          <tbody>
            {commands
              .filter(
                command => command.keywords.indexOf(this.props.searched) !== -1
              )
              .map((command, index) => {
                return (
                  <tr key={index}>
                    <td>{command.name}</td>
                    <td>{command.command}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
