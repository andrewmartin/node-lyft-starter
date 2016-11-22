import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import GoogleMap from 'google-map-react';

import Nav from 'components/layout/nav';
import Main from 'components/layout/main';
import RideTypes from 'components/modules/ride-types';
import Cost from 'components/modules/cost';
import SearchBox from 'components/modules/search-box';
import NearbyDrivers from 'components/modules/nearby-drivers';
import ETA from 'components/modules/eta';
// import TextInput from 'components/modules/text-input';

import LocationActions from 'actions/location';

class Home extends Component {

  onPlacesChanged(event) {
    const {
      dispatch,
    } = this.props;
    const e = event[0];
    const {
      geometry: {
        location,
      },
    } = e;

    const lat = location.lat();
    const lng = location.lng();

    dispatch(LocationActions.setCoords(lat, lng));
  }

  componentDidMount() {
    const {
      dispatch,
    } = this.props;
    let pos = {};

    pos = {
      lat: 37.774929,
      lng: -122.419416,
    };

    dispatch(LocationActions.setCoords(pos.lat, pos.lng));
  }

  updateLocation(e) {

  }

  submitLocation(e) {
    e.preventDefault();
  }

  render() {
    const {
      location,
      zoom,
    } = this.props;
    const center = location;

    return (
      <div className="layout">
        <Nav />
        <Main>
          <div className="jumbotron intro">
            <h2> Welcome to the Lyft Node Starter Kit</h2>
            <p>See how to use the <code>node-lyft</code> wrapper by checking out the controller responses and testing calls below.</p>
          </div>
          <div className="page-container clearfix">
            <div className="map clearfix">
              <GoogleMap
                apiKey={window.GOOGLE_API_KEY}
                center={center}
                zoom={zoom}
              />
            </div>
            <div className="">
              <div className="col-md-12">
                <div className="map__input">
                  <label htmlFor="address">
                    Address:
                  </label>
                  <SearchBox
                    onUpdate={this.onPlacesChanged.bind(this)}
                  />
                  <p className="tip">Enter a search to discover a latitude and longitude for use in the queries below.</p>
                  <div className="form-inline form-inline__meta">
                    <div className="form-group">
                      <label>
                        Latitude:
                        <strong>
                          {this.props.location.lat}
                        </strong>
                      </label>
                    </div>
                    <div className="form-group">
                      <label>
                        Longitude:
                        <strong>
                          {this.props.location.lng}
                        </strong>
                      </label>
                    </div>
                  </div>
                  {/* <form
                    className="form-inline"
                    onSubmit={this.submitLocation.bind(this)}
                  >
                    <label>
                      Latitude:
                    </label>
                    <input
                      onKeyUp={this.updateLocation.bind('latitude', this)}
                      type="text"
                      className="form-control"
                    />
                    <label>
                      Longitude:
                    </label>
                    <input
                      onKeyUp={this.updateLocation.bind('longitude', this)}
                      type="text"
                      className="form-control"
                    />
                  </form> */}
                </div>
              </div>
            </div>
            <div className="lower-row  clearfix">
              <div className="col-lg-6">
                <RideTypes
                  location={this.props.location}
                />
              </div>
              <div className="col-lg-6">
                <Cost
                  location={this.props.location}
                />
              </div>
            </div>
            <div className="lower-row  clearfix">
              <div className="col-lg-6">
                <NearbyDrivers
                  location={this.props.location}
                />
              </div>
              <div className="col-lg-6">
                <ETA
                  location={this.props.location}
                />
              </div>
            </div>
          </div>
        </Main>
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func,
  zoom: PropTypes.number,
  location: PropTypes.object,
};

Home.defaultProps = {
  dispatch: () => {},
  zoom: 9,
  location: {
    lat: 37.774929,
    lng: -122.419416,
  },
};

function mapStateToProps(state) {
  return {
    location: state.location,
    lat: state.location.lat,
    lng: state.location.lng,
  };
}

export default connect(mapStateToProps)(Home);
