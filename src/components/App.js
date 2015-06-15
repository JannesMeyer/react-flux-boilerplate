import React, { Component } from 'react';

import 'normalize.css/normalize.css';
import './App.less';

/**
 * The main component the gets loaded into the <body>
 */
export default class App extends Component {

  render() {
    return (
      <main className="App">
        <h1>Hello World</h1>
      </main>
    );
  }

}