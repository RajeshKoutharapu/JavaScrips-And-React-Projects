import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import { lazy,Suspense } from 'react';



const Home = lazy(() => import('./home.js'));
const About = lazy(() => import('./about.js'));
const Profile = lazy(() => import('./profile.js'));

function Header(){
  return(<>
   <Link to='/home'>home page </Link>
    <Link to='/about'>about us</Link>
    <Link to='/profile'>profile</Link>
    </>
   
  )
}

function App() {
  return (
      <>
      <BrowserRouter>
         <Header />
         <Suspense>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
      </Suspense>
      </BrowserRouter>
      </>
  )
}

export default App;
