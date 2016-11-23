import React, { Component, PropTypes } from 'react';

export default class Pin extends Component {
  render() {
    const {
      lat,
      lng,
    } = this.props;

    return (
      <div className="pin">
        {lat},{lng}
      </div>
    );
  }
}

Pin.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
};
