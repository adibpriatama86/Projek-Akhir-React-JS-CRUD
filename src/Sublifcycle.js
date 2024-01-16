import React, { Component } from 'react';

export default class Sublifcycle extends Component {

    componentWillUnmount() {
        this.props.ubahMakanan("Sate")
    }

  render() {
    return (
      <div>
        <h1>Component Sub Lifecycle</h1>
      </div>
    )
  }
}
