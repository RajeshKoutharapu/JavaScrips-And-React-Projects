import logo from './logo.svg';
import './App.css';
import {useRef,useState} from 'react'
function App() {

  let [text,updatetext]=useState("");
  let input=useRef();
  return (
      <>
      <input  ref={input}  type="text"/>
      <button onClick={()=>{
          updatetext(input.current.value)
      }
      }> submit</button>
      <p>{text}</p>
      </>
  )
}

export default App;
