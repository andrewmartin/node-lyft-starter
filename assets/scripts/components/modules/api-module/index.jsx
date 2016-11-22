import React, { Component, PropTypes } from 'react';

export default class ApiModule extends Component {

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

  render() {
    return (
      <div className="api-module">
        <form action="" className="col-md-6">
          <div className="form-group">
            <label htmlFor="location">Location Start</label>
            <input className="form-control" id="locationBegin" placeholder="Location Start" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location End</label>
            <input className="form-control" id="locationEnd" placeholder="Location End" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="location">Ride Type (optional)</label>
            <input className="form-control" placeholder="Longitude" type="number" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
          <div className="card card-response">
            <div className="card-block">
              <h6 className="card-title">Response:</h6>
              <div className="card-response__content">
                Content here
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
