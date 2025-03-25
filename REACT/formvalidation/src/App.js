import logo from './logo.svg';
import './App.css';
import {useState} from 'react'


function App() {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let [email,setEmail]=useState("")
  let[password,setPassword]=useState("")
  let [error,updateError]=useState({
     emailerror:"",
     passworderror:""
  })
  function handleSubmit(){
    let newerror={emailerror:"",passworderror:""}
   if(email.trim()==="")
        newerror.emailerror="enter a valid email"
    else if(!emailPattern.test(email))
         newerror.emailerror="enter a valid email"
      else 
           newerror.emailerror=""

      if(password.length<8)
        newerror.passworderror="lenght should grater 8"
        else
       newerror.passworderror=""


    updateError(newerror)
    if(!newerror.emailerror && !newerror.passworderror){
        alert("correct input")
       setEmail("")
       setPassword("")
    }

  }         
  
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">Login</h3>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error.emailerror&&<span className='text-danger'>{error.emailerror}</span>}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
             {error.passworderror&&<span className='text-danger'>{error.passworderror}</span>}
          </div>
          <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>
            Login
          </button>
      </div>
    </div>
  );
}

export default App;
