import React from 'react';

function Keypad({handleNumberClicks,clear,caliculate}) {
  return (
    <div className='container text-center mt-3'>
      <div className='row mb-2'>
        <div className='col-3'><button className='btn btn-primary ' onClick={()=>{
            handleNumberClicks("7")
        }}>7</button></div>
        <div className='col-3'><button className='btn btn-primary ' onClick={()=>{
            handleNumberClicks("8")
        }}>8</button></div>
        <div className='col-3'><button className='btn btn-primary ' onClick={()=>{
            handleNumberClicks("9")
        }}>9</button></div>
        <div className='col-3'><button className='btn btn-danger '  onClick={()=>{
            handleNumberClicks("/")
        }}>/</button></div>
      </div>
      <div className='row mb-2'>
        <div className='col'><button className='btn btn-primary w-100'  onClick={()=>{
            handleNumberClicks("4")
        }}>4</button></div>
        <div className='col'><button className='btn btn-primary w-100' onClick={()=>{
            handleNumberClicks("5")
        }}>5</button></div>
        <div className='col'><button className='btn btn-primary w-100' onClick={()=>{
            handleNumberClicks("6")
        }}>6</button></div>
        <div className='col'><button className='btn btn-danger w-100' onClick={()=>{
            handleNumberClicks("*")
        }}>*</button></div>
      </div>
      <div className='row mb-2'>
        <div className='col'><button className='btn btn-primary w-100'  onClick={()=>{
            handleNumberClicks("1")
        }}>1</button></div>
        <div className='col'><button className='btn btn-primary w-100'  onClick={()=>{
            handleNumberClicks("2")
        }}>2</button></div>
        <div className='col'><button className='btn btn-primary w-100'  onClick={()=>{
            handleNumberClicks("3")
        }}>3</button></div>
        <div className='col'><button className='btn btn-danger w-100' onClick={()=>{
            handleNumberClicks("+")
        }}>+</button></div>
      </div>
      <div className='row mb-2'>
        <div className='col'><button className='btn btn-primary w-100'  onClick={()=>{
            handleNumberClicks("0")
        }}>0</button></div>
        <div className='col'><button className='btn btn-success w-100' onClick={()=>caliculate()
        }>=</button></div>
        <div className='col'><button className='btn btn-warning w-100'onClick={()=>{
            clear()
        }}>C</button></div>
        <div className='col'><button className='btn btn-danger w-100' onClick={()=>{
            handleNumberClicks("-")
        }}>-</button></div>
      </div>
    </div>
  );
}

export default Keypad;
