import logo from './logo.svg';
import './App.css';
import {useState,useEffect, useMemo} from 'react'


const data=[{name:"rajesh", age:24,marks:50},
  {name:"mahesh", age:24,marks:50},
  {name:"Deepika", age:24,marks:50},
  {name:"divya", age:24,marks:50},
  {name:"pandu", age:24,marks:50}
]
function App() {

let [localtime,setime]=useState(new Date().toLocaleTimeString())
let [searchtext,change]=useState("")
 
useEffect(() => {
  const interval = setInterval(() => {
    setime(new Date().toLocaleTimeString());
  }, 1000);

  return () => clearInterval(interval); // Cleanup function
}, []);

let filtereddata=useMemo(()=>{
  console.log("check")
  return data.filter((p) =>
    p.name.toLowerCase().includes(searchtext.toLowerCase()) // Fixed: includes instead of include
  );
},[searchtext,data]
);

  
  return (
    <>
    <h1>{localtime}</h1>
    <input type='text' value={searchtext} onChange={(t)=>
      {    
          change(t.target.value)
      }
    } ></input>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {filtereddata.map((d, index) => (
            <tr key={index}>
              <td>{d.name}</td>
              <td>{d.age}</td>
              <td>{d.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
      
  )
}

export default App;
