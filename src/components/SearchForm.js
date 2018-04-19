import React from "react";
import PropTypes from "prop-types";
import "./SearchForm.css";

export default class extends React.Component {
  state = {
    text: ""
  };
  static propTypes = {
    onSubmit: PropTypes.func,
    onTextCHange: PropTypes.func
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };
  handleChange = event => {
    const { value } = event.target;
    this.setState({
      text: value
    });
    this.props.onTextChange(value);
  };

  render() {
    return (
      <div className="Search">
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.text}
            onChange={this.handleChange}
            type="text"
          />
        </form>
      </div>
    );
  }
}
