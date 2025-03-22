import { useLocation,useParams } from "react-router-dom"
export function User(){

    let parameters=useParams();
    let qparms=useLocation();
    let data=new URLSearchParams(qparms.search);
    let name=data.get("name")
    return(
        <>
         <h1>{parameters.id}</h1>
         <h2>{parameters.course}</h2>
         <h3>{name}</h3>
         </>
    )
}