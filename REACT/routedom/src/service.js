import {Link,Outlet} from 'react-router-dom'
export function Services(){
    return(
        <>
          <Link to='backend'>back</Link>
          <Link to='frontend'>frontend</Link>
           

         <Outlet/>
        </>
    )
}

export function Frontend(){
    return(
        <h1>FRONTEND</h1>
    )
}
export function Backend(){
    return(
        <h1>Backend</h1>
    )
}