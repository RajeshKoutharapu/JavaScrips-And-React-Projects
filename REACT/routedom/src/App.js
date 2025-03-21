import logo from './logo.svg';
import './App.css';
import {Homepage}  from './Home';
import About from './About'
import Orders  from './orders';
import { Services,Frontend,Backend } from './service';
import {BrowserRouter,Routes,Route,Link}  from 'react-router-dom'

function App() {

  
  return (
    <>
    <BrowserRouter>
  
    {/* <Link to="/about"></Link> */}
    <Link to="/homepage">Click To Home page</Link>
  
 <Routes>
  v  <Route path='/services' element={<Services/>}>
         <Route path='frontend' element={<Frontend/>}/>
         <Route path='Backend' element={<Backend/>}/>

       </Route>
  <Route path='/orders' element={<Orders/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/homepage' element={<Homepage/>}/>
    
    </Routes>
  </BrowserRouter>
    </>
   
  )
}

export default App;
