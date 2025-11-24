import { useState } from "react"
import '../App.css'
import rcb from '../assets/imges/RCB.jpg'
import csk from '../assets/imges/CSK.webp'
const Colour = () => {
    const[colour,setColour]=useState(false)
    const[image,setImage]=useState(false)
    
    const colourchange =()=>{
        setColour(!colour)
        setImage(!image)
    }

    const [shape,setShape]=useState(0)
    const shapechange =()=>{
        setShape((shape +1)% 3)
    }
    const [number_data,setNumber_data]=useState([0,1])
    const fibonno =()=>{
        const last =number_data[number_data.length -1]
        const second = number_data[number_data.length-2]
        const next = last + second
      setNumber_data([...number_data, next])
}
  return (
    <>
    <div>
        {colour?<div style={{backgroundColor:"red",color:"white", padding:"50px",border:"5px solid",borderRadius:"70px"}}>
            <h1 className="rcb">Royal Challengers Bangalore</h1>
        </div>: <div style={{backgroundColor:"yellow",color:"white", padding:"50px",border:"5px solid",borderRadius:"70px"}}>
            <h1 className="csk">Chennai Super Kings</h1>
        </div>}
        {image ? <img className="rcbimage"  src={rcb} alt="" />:<img className="cskimage" src={csk} alt="" />}
        <button onClick={colourchange}>Click me</button>
    </div>
    <div>
        <button onClick={shapechange}>CLICK ME</button>
        {
            shape === 0 && <div style={{width:"100px",height:"100px", backgroundColor:"red"}}>
            </div>
        }
         {
            shape === 1 && <div style={{width:"100px",height:"100px", backgroundColor:"blue",margin:"2px",borderRadius:"50%"}}>
            </div>
        }
        {
            shape === 2 && <div style={{width:"200px",height:"100px", backgroundColor:"yellow",margin:"2px",borderLeft:"50px",borderBottom:"50px"}}>
            </div>
        }
    </div>
    <div>
        <h1>{number_data.join(',')}</h1>
        <button onClick={fibonno}>fibonoccis Series</button>
    </div>
    </>
  )
}

export default Colour