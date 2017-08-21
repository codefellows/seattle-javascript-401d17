import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='custom-header'>
        <h1>Counter App</h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'hello world',
      count: 0
    };

    this.happening = 'eclipse';
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(state => {
      return { count: state.count + 1 }
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <p onClick={this.handleClick}>Counter: {this.state.count}</p>
        <p>{this.happening}</p>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
