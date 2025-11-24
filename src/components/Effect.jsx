import { useEffect, useState } from "react";


const Effect = () => {

    const [info,setInfo] = useState([])

    useEffect (()=>{
        fetch('https://dummyjson.com/comments')
        .then(response => response.json())
        .then(data => setInfo(data.comments))
        .catch(error => console.error(error))
    },[])
    
    return (
        <>
        <h2>
            {info.map((e,i)=>(
                <p key={i}>
                    {e.body} <br />
                    {e.user.fullName}
                </p>
            ))}
        </h2>
        </>
    )
}
export default Effect;
