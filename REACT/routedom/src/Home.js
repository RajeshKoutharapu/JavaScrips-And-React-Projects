 import {BrowserRouter,Routes,Route,Link,Outlet} from 'react-router-dom'
 export function Homepage()

{
    return(
         <>
         <div>
         <Link to='/about'> <button>about</button></Link>
         <Link to='/orders'> <button>orders</button></Link> 
         <Link to='/services'> <button>services</button></Link> 

         </div>
         <h1>hh</h1>
           {/* <ul>
            <li>about</li>
            <li>Services</li>
            <li>orders</li>
           </ul> */}

        <Outlet/>
         </>
    )
}

