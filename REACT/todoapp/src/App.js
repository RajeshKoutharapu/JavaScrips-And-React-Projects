import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let[todotask,updateTask]=useState("")
   
  let[todolist,updateList]=useState([])

  //function for adding task to todolist useSae
 function todoTaskSummision(task){
  if(task === "")
     alert("entre valid data")
    else{
      let newtodolist=[...todolist,task];
      updateList(newtodolist)
      updateTask("")
    }
 }

 //function to dlelete task and update todolidt useSate
 function deletetask(task){
   let updatedlist= todolist.filter((list)=>{
      if(list != task)
         return list;
    })
    updateList(updatedlist)
 }
  return (
    
    <div  className='container mt-5 w-50'>
      <div className='head'>
      <h1>TODO LIST APP</h1>
      </div>
      
      <div className='d-flex input-group'>

          <input type='text' className='form-control' value={todotask} onChange={(e)=>{
            updateTask(e.target.value)
            // console.log(e.target.value)
          }}></input>
          <button className='btn btn-primary' onClick={()=>{
            todoTaskSummision(todotask)
          }}>add</button>
      </div>
     <ul className='list-group mt-5 ' >
        {
          todolist.map((todo)=>{
            return (
              <li className='list-group-item  d-flex'>
              <p>{todo}</p>
              <button className='btn'onClick={()=>{
                deletetask(todo)
              }} > ❌ </button>
            </li>
           
            )
          })
        }

     </ul>
    </div>
  )
}

export default App;
