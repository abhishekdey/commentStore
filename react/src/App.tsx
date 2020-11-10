import React, { Component } from 'react';
import './App.css';
import FetchComponent from './Fetch';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.resetCommentFeed}>Reset comment feed</button>
        <FetchComponent/>
      </div>

    );
  }

  private resetCommentFeed = () => {
    fetch('/api/reset-comments', {
      method: 'post'
    });
  }
}

export default App;
