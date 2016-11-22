import React, { Component } from 'react';

class Main extends Component {

  render() {
    return (
      <div className="main">
        {this.props.children}
      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.node,
};

export default Main;
