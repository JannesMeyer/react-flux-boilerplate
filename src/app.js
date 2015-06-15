import React from 'react';
import Perf  from 'react/lib/ReactDefaultPerf';
import App   from './components/App';

if (__DEV__) {
  Perf.start();
  window.printWasted = Perf.printWasted;
  window.printInclusive = Perf.printInclusive;
}

React.render(<App />, document.body);