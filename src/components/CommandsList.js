import React from "react";
import PropTypes from "prop-types";
import "./CommandsList.css";

/**
 * Display a list of commands
 */
export default class CommandsList extends React.Component {
  static propTypes = {
    commands: PropTypes.arrayOf(PropTypes.object)
  };
  idFromString = string => {
    return string.replace(/[^a-zA-Z0-9]/g, "");
  };
  render() {
    return (
      <div className="CommandsList">
        <table>
          <tbody>
            {this.props.commands.map((command, index) => {
              return (
                <tr key={this.idFromString(command.label)}>
                  <td className="label-wrapper">
                    <div
                      className="label"
                      dangerouslySetInnerHTML={{ __html: command.label }}
                    />
                  </td>
                  <td className="command">
                    <code>{command.command}</code>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
