import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sdata from './student'
let slist=[{
    sname :"rajesh",
    smarks:333,
    age:18
},
{
  sname :"rajesh",
  smarks:333,
  age:18 
},
{
  sname :"rajesh",
    smarks:333,
    age:18
},
{sname :"rajesh",
  smarks:333,
  age:18}]
createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <App/> */}
    {/* <Sdata name="rajesh" age="25" marks="55"></Sdata> */}
    {slist.map((e, index) => (
      <Sdata key={index} name={e.sname} smarks={e.smarks} age={e.age} />
    ))}
    
  </StrictMode>
)
