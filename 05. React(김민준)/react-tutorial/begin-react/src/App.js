import React from 'react';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <>
      <Wrapper>
        <Hello name='react' color='red' />
        <Hello color='pink'></Hello>
      </Wrapper>
    </>
  );
}

export default App;
