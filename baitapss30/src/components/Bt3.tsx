import React, { Component } from 'react';

// Định nghĩa kiểu cho state
interface State {
  company: string;
}

class CompanyComponent extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    // Khai báo state
    this.state = {
      company: 'Rikkei Academy'
    };
  }

  // Phương thức thay đổi state
  changeCompany = () => {
    this.setState({
      company: this.state.company === 'Rikkei Academy' ? 'RikkeiSoft' : 'Rikkei Academy'
    });
  }

  render() {
    return (
      <div>
        <h1>Company: {this.state.company}</h1>
        <button onClick={this.changeCompany}>Change state</button>
      </div>
    );
  }
}

export default CompanyComponent;
