import React, { Component } from 'react';

interface State {
  title: string;
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      title: 'Initial Title'
    };
  }

  // Phương thức thay đổi tiêu đề khi component mount vào DOM
  componentDidMount() {
    document.title = this.state.title;
  }

  // Phương thức thay đổi tiêu đề khi state hoặc props thay đổi
  componentDidUpdate(prevProps: {}, prevState: State) {
    if (prevState.title !== this.state.title) {
      document.title = this.state.title;
    }
  }

  changeTitle = () => {
    this.setState({
      title: this.state.title === 'Initial Title' ? 'Updated Title' : 'Initial Title'
    });
  }

  render() {
    return (
      <div>
        <h1>Title: {this.state.title}</h1>
        <button onClick={this.changeTitle}>Change Title</button>
      </div>
    );
  }
}

export default App;
