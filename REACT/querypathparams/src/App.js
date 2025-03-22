import logo from './logo.svg';
import './App.css';
import {User} from './user'
import{BrowserRouter,Routes,Route,Link} from 'react-router-dom'
function App() {
  return (
    <>
       <BrowserRouter>
         <Link to="/user">hjdvh</Link>
        <Routes>
        <Route path="/user/:id/:course" element={<User/>}/>
        </Routes>
       </BrowserRouter>

       </>
  )
}

export default App;
