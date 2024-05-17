import React, { Component } from 'react';

interface State {
  time: Date;
}

class Clock extends Component<{}, State> {
  private timerID: number | undefined;

  constructor(props: {}) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  // Thiết lập interval để cập nhật thời gian mỗi giây
  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }

  // Xóa interval khi component bị unmount
  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  // Phương thức tick để cập nhật state
  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Thời gian hiện tại: {this.state.time.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Clock;
