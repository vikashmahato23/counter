import {useState} from "react"

function Button({value}){
    const [count , setCounter] =useState(value)
    const btnadd =(val)=>{
       setCounter(count+val)
    }
    const btnsub =(val)=>{
        if(count>0)
       setCounter(count-val)
    }
    const btndub =()=>{
       setCounter(count*2)
    }

   return (
       <div className="count1">
           <h3 style={ count%2==0? { color:"green"

           } :{color:"red"}}>This is count {count }</h3>
           <button onClick={()=>btnadd(1)}>+</button>
           <button  onClick={()=>btnsub(1)}>-</button>
      <br />
      <button  onClick={btndub}>double</button>
       </div>
   )
       

}

export {Button}
