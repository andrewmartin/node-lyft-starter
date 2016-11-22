import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import GoogleMap from 'google-map-react';

import Nav from 'components/layout/nav';
import Main from 'components/layout/main';
import ApiModule from 'components/modules/api-module';

import LocationActions from 'actions/location';

class Home extends Component {
  //
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     center: {
  //       lat: 37.774929,
  //       lng: -122.419416,
  //     },
  //   };
  // }

  componentDidMount() {
    const {
      dispatch,
    } = this.props;
    let pos = {};

    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    } else {
      // Browser doesn't support Geolocation
      pos = {
        lat: 37.774929,
        lng: -122.419416,
      };
    }

    // pos = {
    //   lat: 37.774929,
    //   lng: -122.419416,
    // };

    dispatch(LocationActions.setCoords(pos.lat, pos.lng));
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
          <div className="container-fluid clearfix">
            <div className="map clearfix">
              <GoogleMap
                apiKey={window.GOOGLE_API_KEY}
                center={center}
                zoom={zoom}
              />
            </div>
            <div className="map__input">
              <label htmlFor="address">
                Address:
              </label>
              <input
                type="text" className="form-control"
              />
            </div>
            <div className="lower-row row clearfix">
              <ApiModule />
              <ApiModule />
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
    lat: 34.052235,
    lng: -118.243683,
  },
};

function mapStateToProps(state) {
  return {
    location: state.location,
  };
}

export default connect(mapStateToProps)(Home);
