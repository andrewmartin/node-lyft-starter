import React, { Component, PropTypes } from 'react';

export default class TextInput extends Component {

  constructor(props) {
    super();

    this.state = {
      value: '',
    };
  }

  // componentWillUpdate() {
  //   console.log('this.props', this.props);
  //   this.setState({
  //     value: this.props.initialValue,
  //   });
  // }

  onInputChange(inputName, event) {
    this.setState({
      [inputName]: event.target.value,
    });
  }

  render() {
    return (
      <input
        type="text"
        defaultValue={this.props.initialValue}
      />
    );
  }
}

TextInput.propTypes = {
  initialValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};
