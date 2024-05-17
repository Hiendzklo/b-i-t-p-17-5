import React, { Component } from 'react';

// Định nghĩa kiểu cho state
interface State {
  slogan: string;
}

class SloganComponent extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    // Khai báo state
    this.state = {
      slogan: 'Học code để đi làm'
    };
  }

  // Phương thức thay đổi state
  changeSlogan = () => {
    this.setState({
      slogan: 'Học code sẽ thành công. Cố lên!!!'
    });
  }

  // Chặn render lại giao diện khi state không thay đổi
  shouldComponentUpdate(nextProps: {}, nextState: State) {
    // Chỉ render lại khi giá trị của state thay đổi
    return nextState.slogan !== this.state.slogan;
  }

  render() {
    return (
      <div>
        <h1>Slogan: "{this.state.slogan}"</h1>
        <button onClick={this.changeSlogan}>Change state</button>
      </div>
    );
  }
}

export default SloganComponent;
