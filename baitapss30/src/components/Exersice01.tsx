import React, { Component } from 'react';


interface Exersice01State {
  userName: string;
}

class Exersice01 extends Component<{}, Exersice01State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      userName: 'Nguyễn Duy Hiển',
    };
  }

  componentDidMount() {
    console.log('Component đã được mount');
  }

  render() {
    return (
      <div>
        <h1>Chào mừng, {this.state.userName}!</h1>
      </div>
    );
  }
}

export default Exersice01;
