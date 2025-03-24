
import{useContext} from 'react'
import {context} from './App'
export function Student(){
    let data=useContext(context);

  return(
    <>
    <h1>{data.name}</h1>
    <h2>{data.age}</h2>
    <h3>{data.course}</h3>
    </>
    
  )
  
}