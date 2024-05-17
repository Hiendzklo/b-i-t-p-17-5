import React, { Component } from 'react';

interface State {
  status: string;
}

interface StatusComponentProps {
  status: string;
}

class StatusComponent extends Component<StatusComponentProps> {
  render() {
    return (
      <div>
        <h1>Status: "{this.props.status}"</h1>
      </div>
    );
  }
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      status: 'Open the form'
    };
  }

  changeStatus = () => {
    this.setState({
      status: this.state.status === 'Open the form' ? 'Close the Form' : 'Open the form'
    });
  }

  render() {
    return (
      <div>
        <StatusComponent status={this.state.status} />
        <button onClick={this.changeStatus}>Change props</button>
      </div>
    );
  }
}

export default App;
