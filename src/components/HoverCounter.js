import React, { Component } from 'react';
import UpdatedComponent from './withCounter';

class HoverCounter extends Component {
 render() {
  return (
   <div>
      <h2 style={this.style} onMouseOver={this.props.incrementCount}>
      {this.props.name} hovered {this.props.count} times</h2>
   </div>
  )
 }
}


export default UpdatedComponent(HoverCounter);