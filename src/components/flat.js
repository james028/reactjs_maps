import React, { Component } from 'react'
import './flat.css'

export default class Flat extends Component {

  render() {
    const title = `${this.props.flat.price} ${this.props.flat.priceCurrency} - ${this.props.flat.name}`;

    const stlBack = {
        backgroundImage: `url(${this.props.flat.imageUrl})`
    };

    return (
      <div className="flat-main">
        <div className="flat-background" style={stlBack}></div>
        <div className="flat-title">
            {title}
        </div>
      </div>
    )
  }
}
