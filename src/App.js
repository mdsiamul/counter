
import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)

  const addCount = () => { setCount(count => count + 1) };
  const lessCount = () => { setCount(count => count - 1) }

  return (
    <div className="App">
      <h1>Prince Counter app</h1>
      <h2> Number: {count}</h2>
      <button className='btn' onClick={addCount}>Add</button>
      <button className='btn2' onClick={lessCount}>Less</button>
    </div>
  );
}

export default App;
