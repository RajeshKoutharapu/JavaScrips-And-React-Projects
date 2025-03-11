



export function clicking(){
    return(
        <button onClick={sdata}>click me</button>
    )
}
let sdata=(props)=>
{
    return(
   //fragments
   <>
   <h1>{props.name}</h1>
   <h2>{props.age}</h2>
   <h3>{props.smarks}</h3>


   </>
    )
    
}
export default sdata;