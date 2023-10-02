import React from 'react';
import Provider from './context/Provider';
import Display from './Display';

function App() {
  return (
    <Provider>
      <Display />
    </Provider>
  );
}

export default App;
