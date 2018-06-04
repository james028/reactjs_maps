import React, { Component } from 'react'
import './marker.css';

export default class Marker extends Component {
  render() {
    return (
      <div>
        <div className="map-icon">
            {this.props.text}€
        </div>
      </div>
    )
  }
}
