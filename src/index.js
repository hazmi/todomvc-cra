import React from 'react';
import ReactDOM from 'react-dom';
import { Todos } from './components/todos';
import { Footer } from './components/footer';
import * as serviceWorker from './serviceWorker';
import './index.css';

const App = () => (
  <div>
    <Todos />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
