import React, { Component } from 'react';

interface State {
  count: number;
}

class Counter extends Component<{}, State> {
  private timerID: number | undefined;

  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // Thiết lập interval để tăng giá trị count mỗi giây
  componentDidMount() {
    this.timerID = window.setInterval(() => this.incrementCount(), 1000);
  }

  // Xóa interval khi component bị unmount
  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  // Phương thức incrementCount để tăng giá trị count
  incrementCount() {
    this.setState((prevState) => ({
      count: prevState.count === 10 ? 0 : prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}

export default Counter;
