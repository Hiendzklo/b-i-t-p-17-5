import React, { Component } from 'react';

interface State {
  message: string;
}

interface MessageComponentProps {
  message: string;
}

class MessageComponent extends Component<MessageComponentProps> {
  // Chặn render lại giao diện khi props thay đổi
  shouldComponentUpdate(nextProps: MessageComponentProps) {
    return false;
  }

  render() {
    return (
      <div>
        <h1>Message: "{this.props.message}"</h1>
      </div>
    );
  }
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      message: 'Interface rendering'
    };
  }

  changeMessage = () => {
    this.setState({
      message: this.state.message === 'Interface rendering' ? 'Message updated' : 'Interface rendering'
    });
  }

  render() {
    return (
      <div>
        <p>Trước khi click:</p>
        <MessageComponent message={this.state.message} />
        <button onClick={this.changeMessage}>Change props</button>
        <p>Sau khi click:</p>
      </div>
    );
  }
}

export default App;
