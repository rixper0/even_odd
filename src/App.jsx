import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function even() {
    return count % 2 === 0
  }



  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>{even() ? 'Even' : 'Odd'}</p>
      

    </>
  )
}


export default App
