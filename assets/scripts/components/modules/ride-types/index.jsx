import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ResponseBlock from 'components/modules/response-block';

import callApi from 'services/call-api';

class RideTypes extends Component {

  constructor() {
    super();

    this.state = {};
  }

  onInputChange(inputName, event) {
    this.setState({
      [inputName]: event.target.value,
    });
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
    callApi('/api/lyft/ridetypes', data, this);
  }

  render() {
    return (
      <div className="api-module">
        <form
          onSubmit={this.onSubmit.bind(this)}
        >
          <h3 className="api-module__title">
            Ride Types
            <a
              href="https://developer.lyft.com/docs/availability-ride-types"
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
            <label htmlFor="ride_type">Ride Type (optional)</label>
            <input
              className="form-control"
              type="text"
              placeholder="lyft, lyft_line, or lyft_plus"
              onChange={this.onInputChange.bind(this, 'ride_type')}
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

RideTypes.propTypes = {
  location: PropTypes.object,
};

export default connect()(RideTypes);
