import { useContext, useEffect, useRef, useState } from 'react'
import './App.css'
import infoContext from './main';

function App() {
  const [count, setCount] = useState(0);
  const infoUser = useContext(infoContext);
  const ref = useRef();

  const handleClick = () => {    
    setCount(count + 1);
  }

  useEffect(() => {
    setCount(count + 1);
  }, [])

  const handleRef = () => {
    console.log(ref.current.value.length)
  }

  return (
    <div className="App">
      <h1>UseState,UseEffect</h1>
      <p>状態が変わったときにDOMを更新する</p>
      <p>{count}</p>
      <button onClick={handleClick}>+</button>
      <hr />
      <h1>useContext</h1>
      <p>{infoUser.name}</p>
      <p>{infoUser.age}</p>
      <hr />
      <h1>useRef</h1>
      <input type="text" ref={ref}/>
      <button onClick={handleRef}>useRef</button>
      <hr />
      <h1>useReducer</h1>
    </div>
  )
}

export default App
