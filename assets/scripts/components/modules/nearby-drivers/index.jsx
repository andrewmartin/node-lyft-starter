import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import PinActions from 'actions/pins';
import ResponseBlock from 'components/modules/response-block';

import callApi from 'services/call-api';

class NearbyDrivers extends Component {

  constructor() {
    super();

    this.state = {};
  }

  onInputChange(inputName, event) {
    this.setState({
      [inputName]: event.target.value,
    });
  }

  sendPins(response) {
    const {
      dispatch
    } = this.props;
    let driverPins = [];

    response.nearby_drivers.forEach((driverGroup) => {
      driverGroup.drivers.forEach((driverLocations) => {
        driverLocations.locations.forEach((location) => {
          driverPins.push(location);
        });
      });
    });
    dispatch(PinActions.setPins(driverPins));
    window.scrollTo(0,0);
  }

  onSubmit(e) {
    e.preventDefault();
    const {
      location: {
        lat,
        lng
      },
    } = this.props;
    const data = {
      lat,
      lng,
    };
    callApi('/api/lyft/nearby-drivers', data, this, this.sendPins.bind(this));
  }

  render() {
    return (
      <div className="api-module">
        <form
          onSubmit={this.onSubmit.bind(this)}
        >
          <h3 className="api-module__title">
            Nearby Drivers
            <a
              href="https://developer.lyft.com/docs/nearby-drivers"
              target="_blank"
              className="api-module__button"
            >
              API docs
            </a>
          </h3>
          <div className="form-group">
            <label htmlFor="location">Latitude</label>
            <input
              className="form-control"
              placeholder={this.props.location.lat}
              disabled
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Longitude</label>
            <input
              className="form-control"
              placeholder={this.props.location.lng}
              disabled
              type="text"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
          {this.state.response && <ResponseBlock  content={this.state.response} />
          }
        </form>
      </div>
    );
  }
}

NearbyDrivers.propTypes = {
  location: PropTypes.object,
};

export default connect()(NearbyDrivers);
