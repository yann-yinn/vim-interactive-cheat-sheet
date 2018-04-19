import React from "react";
import PropTypes from "prop-types";

export default class CommandList extends React.Component {
  static propTypes = {
    searched: PropTypes.string.isRequired
  };
  render() {
    const { commands } = this.props;
    return (
      <div>
        {commands
          .filter(command => command.name.indexOf(this.props.searched) !== -1)
          .map((command, index) => {
            return (
              <div key={index}>
                <h2>{command.name}</h2>
              </div>
            );
          })}
      </div>
    );
  }
}
