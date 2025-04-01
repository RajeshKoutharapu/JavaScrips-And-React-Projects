import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
//import store  from './store';

function App() {

  let [money,upmoney]=useState(0);
  let [name,upname]=useState("");
  let[number,upnumber]=useState("");
  let store=useSelector((store)=>{return store})
  let dispatch=useDispatch();
  return (
      <>
        
         <div className='container demo'>
         <h1>Banking from</h1>
          <div className='row'>
              <div className='col-5'>
                <input className='input' type="number" placeholder='enter ammount' value={money} onChange={(e)=>{
                  upmoney( Number(e.target.value))
                }}></input>
              </div>
              <div className='col-1'>
               <button className='btn btn-primary' onClick={()=>{
                  dispatch({type:"deposit",amount:money})
                  upmoney(0);
               }}>Deposite</button>
              </div>
              <div className='col-1'>
                <button className='btn btn-danger' onClick={()=>{
                  dispatch({type:"withdraw",amount:money})
                  upmoney(0);
                }} >Withdraw</button>
              </div>
          </div>
          <div className='row '>
               <div className='col-5'>
               <input className='input' type="text" placeholder='enter name'  value={name} onChange={(e)=>{
                upname(e.target.value);
            
               }}></input>
               </div>
               <div className='col-2'>
                <button className='btn btn-primary' onClick={()=>{
                   dispatch({type:"namechange",newname:name})
                   upname("")
                }}>Update</button>
               </div>
          </div>
           <div className='row '>
              <div className='col-5'>
              <input className='input' type="text" placeholder='enter mobile number' value={number} onChange={(e)=>{
                upnumber(e.target.value)
              }} ></input>

              </div>
              <div className='col-2'>
              <button className='btn btn-primary' onClick={()=>{
                dispatch({type:"numberchange",newnumber:number})
                upnumber("")
              }}>update</button>
              </div>

           </div>
         </div>
        <div className='container'>
        <h1>
          information
         </h1>

         <table className='table table-bordered w-50'>
            <thead>
             <tr> 
              <td>amount</td>
              <td>name</td>
              <td>mobile</td>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>{store.amount}</td>
                  <td>{store.name}</td>
                  <td>{store.mobile}</td>
                </tr>
            </tbody>
         </table>
        </div>

      </>
  )
}

export default App;
