import React from 'react';

export default class SearchBox extends React.Component {

  componentDidMount() {
    // const input = ReactDOM.findDOMNode(this.refs.input);
    this.searchBox = new window.google.maps.places.SearchBox(this.node);
    this.searchBox.addListener('places_changed', this.onPlacesChanged.bind(this));
  }

  componentWillUnmount() {
    this.searchBox.removeListener('places_changed', this.onPlacesChanged.bind(this));
  }

  onPlacesChanged() {
    if (this.props.onUpdate) {
      this.props.onUpdate(this.searchBox.getPlaces());
    }
  }

  render() {
    const {
      placeholder,
    } = this.props;
    return <input ref={node => this.node = node} placeholder={placeholder} type="text" />;
  }

}

SearchBox.propTypes = {
  placeholder: React.PropTypes.string,
  onUpdate: React.PropTypes.func,
};
