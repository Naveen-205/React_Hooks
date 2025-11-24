import { useState } from "react"
import Parrot from '../assets/imges/T1.jpg'
import Panda from '../assets/imges/T2.jpg'

const Task = () => {
 
  //Image State
  const [picture,setPicture]=useState(false)

  //Shape State
  const[change, setChange]= useState(0)

  //Image Function
  const image =()=>{
    setPicture(!picture)
  }
   
  //Shape Function
  const shape =()=>{
    setChange((change +1)% 3)
  }

  return (
    <>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"25px"}}>
      {picture ? <img src={Parrot} alt="pic" width="300px" height="200px" />
      :<img src={Panda} alt="pic" width="300px" height="200px" />  }
    </div> 
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10px"}}>
      <button style={{background:"red",color:"white", padding:"10px",border:"none",borderRadius:"5px",cursor:"pointer"}} onClick={image}>Click To Change</button>
    </div>

    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"30px"}}>
      { 
        change == 1 &&
        <div style={{width:"100px",height:"100px",backgroundColor:"red",borderRadius:"50%"}}></div> 
      }
      { 
        change == 2 &&
        <div style={{width:"300px",height:"100px",backgroundColor:"yellow",borderRadius:"25px"}}></div>
      }
      { 
        change == 0 &&
        <div style={{width:"100px",height:"100px",backgroundColor:"green",borderRadius:"5px"}}></div>
      } <br />
    </div>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10px"}}>
    <button style={{background:"black",color:"white",padding:"10px",border:"none",borderRadius:"5px",cursor:"pointer",marginBottom:"30px"}} onClick={shape}>Change Shap</button>  
    </div> 

    </>
  )
}

export default Task;