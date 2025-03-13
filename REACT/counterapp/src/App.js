import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  let [counter,updatecounter]=useState(0);
 let total=10;
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>

    <div className='Main'>
    <h1>Counter App</h1>
    <div className='counterdiv'>
    <button className='minus' disabled={counter === 0} onClick={()=>{
     if(counter>0){
      updatecounter(counter-1);
     }
    }}>-</button>

        <p className='count' >{counter}</p>
        <button className='plus' disabled={counter === total} onClick={()=>{
          if(total>counter){
            updatecounter(counter+1)
          }
        }}>+</button>
    </div>
    </div>
    </>
  )
}

export default App;
