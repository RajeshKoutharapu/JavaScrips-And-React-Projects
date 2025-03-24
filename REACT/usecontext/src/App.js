import logo from './logo.svg';
import './App.css';
import {Link,BrowserRouter,Routes,Route,Outlet} from 'react-router-dom'
import { createContext } from 'react';
import {Student} from './student'
export const context=createContext();
let info={
     name:"rajesh",
     age:"25",
     course:"java"
}
function App() {
  return (

      <>

<h1>hello</h1>
      <context.Provider value={info}>
         <Student/>
      </context.Provider>
      
      

      </>
  )
}

export default App;
