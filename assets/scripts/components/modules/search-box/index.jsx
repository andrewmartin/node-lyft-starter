import React from 'react';

export default class SearchBox extends React.Component {

  componentDidMount() {
    const input = React.findDOMNode(this.refs.input);
    this.searchBox = new google.maps.places.SearchBox(input);
    this.searchBox.addListener('places_changed', this.onPlacesChanged);
  }
  componentWillUnmount() {
    this.searchBox.removeListener('places_changed', this.onPlacesChanged);
  }

  onPlacesChanged() {
    if (this.props.onPlacesChanged) {
      this.props.onPlacesChanged(this.searchBox.getPlaces());
    }
  }

  render() {
    return <input ref="input" {...this.props} type="text" />;
  }

}

SearchBox.propTypes = {
  placeholder: React.PropTypes.string,
  onPlacesChanged: React.PropTypes.func,
};
