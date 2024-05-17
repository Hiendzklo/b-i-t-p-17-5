import React, { Component } from 'react';

class Notification extends Component {
  componentDidMount() {
    console.log('Component đã được mount!');
  }

  render() {
    return (
      <div>
        <h1>Notification Component</h1>
      </div>
    );
  }
}

export default Notification;
