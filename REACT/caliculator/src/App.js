import logo from './logo.svg';
import './App.css';
import KeyPad from './keypad';
import {useState} from 'react';
function App() {

  let [data,setdata]=useState("");


  function handleNumberClicks(number){
      setdata(data+number);
  }
  function clear(){
    setdata("");
  }
  function caliculate(){
    let caliculate=eval(data);
    setdata(eval)
  }

  return (
   <div className='containers'>
    <h1>Caliculator app</h1>
      <div className='caliculator'>
         <input className='number'value={data}></input>
      </div>
      <KeyPad handleNumberClicks={handleNumberClicks} clear={clear} caliculate={caliculate}></KeyPad>
   </div>
  )
}

export default App;
