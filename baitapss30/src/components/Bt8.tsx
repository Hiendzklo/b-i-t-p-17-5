import React, { Component } from 'react';

interface State {
  title: string;
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      title: ''
    };
  }

  // Phương thức xử lý sự kiện onChange của input
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    this.setState({ title: newTitle });
  }

  // Phương thức thay đổi tiêu đề khi component mount và cập nhật
  componentDidMount() {
    document.title = this.state.title;
  }

  componentDidUpdate(prevProps: {}, prevState: State) {
    if (prevState.title !== this.state.title) {
      document.title = this.state.title;
    }
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          placeholder="Thay đổi tiêu đề" 
          value={this.state.title} 
          onChange={this.handleChange} 
        />
      </div>
    );
  }
}

export default App;
