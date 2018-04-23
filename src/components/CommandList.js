import React from "react";
import PropTypes from "prop-types";
import "./CommandList.css";

export default class CommandList extends React.Component {
  static propTypes = {
    searched: PropTypes.string.isRequired
  };
  render() {
    const { commands } = this.props;
    let results = commands.filter(
      command => {
        console.log(command.command)
        return command.keywords.indexOf(this.props.searched) !== -1
      }
    );
    if (results.length === 0) {
      return (
        <div
          style={{ textAlign: "center", fontSize: "20px", margin: "40px" }}
          className="CommandList"
        >
          No results found{" "}
          <span role="img" aria-label="face ashamed">
            😓
          </span>
        </div>
      );
    }
    return (
      <div className="CommandList">
        <table>
          <tbody>
            {results.map((command, index) => {
              return (
                <tr key={index}>
                  <td className="label">{command.label}</td>
                  <td className="command">{command.command}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
