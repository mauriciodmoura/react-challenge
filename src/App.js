import React from 'react';
import Breakify from './components/Breakify/Breakify';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
        </header>
        <main>
          <Breakify />
        </main>
      </div>
    </Provider>
  );
};

export default App;
