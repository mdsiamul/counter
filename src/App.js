import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)

  const addCount = () => { setCount(count => count + 1) };
  const lessCount = () => { setCount(count => count - 1) }

  return (
    <div className="App">
      <h1>Prince Counter app</h1>
      <h4> Number: {count}</h4>
      <button onClick={addCount}>Add</button>
      <button onClick={lessCount}>Less</button>
    </div>
  );
}

export default App;
